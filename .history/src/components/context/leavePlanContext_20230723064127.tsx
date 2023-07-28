/* eslint-disable default-case */
/* eslint-disable no-useless-return */
/* eslint-disable max-len */
/* eslint-disable arrow-parens */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import Data from "./localhostContext";
import Leave from "./leaveObj";
import {props} from "../../interface/interfaceProps";
// eslint-disable-next-line import/no-extraneous-dependencies

interface WarnMessInterface {
  dateWarnMess: Date,
  warnMess: string,
}
const LeavePlanContext = createContext({});

export function LeavePlanProvider({ children }: props) {

  const [firstDate, setFirstDate] = useState<any>();
  const [lastDate, setLastDate] = useState<any>();
  const [leave, setLeave] = useState<string>("none");
  const [personReplace, setPersonReplace] = useState<string>("none");
  const [dataRender, setDataRender] = useState<object[]>([]);
  const [dataRenderConfirm, setDataRenderConfirm] = useState<object[]>([]);
  const [count, setCount] = useState<number>(1);
  const [warnMess, setWarnMess] = useState<object[]>([]);
  const [booleanValue, setBooleanValue] = useState<boolean>(true);

  const leaveData = new Data("leavePlan");
  const leaveConfirmData = new Data("leaveConfirm");
  const leaveCancelData = new Data("leaveCancel");
  const user = new Data("user");
  const userData = user.getData();
  const leaveArr = [
    "none",
    "Paid Leave",
    "Unpaid Leave",
    "Maternity Leave",
    "Paternity Leave",
    "Compassionate leave",
    "Parental leave",
  ];
  const personReplaceArr = [
    "none",
    "John Brzezinski",
    "Joseph Dark",
    "Tom Yellow",
  ];
  const handleWarnMess = (date : Date, mess: string) => {
    warnMess.push({
      dateWarnMess: date,
      warnMess: mess,
    });
    setWarnMess(warnMess);
    setBooleanValue(false);
  };

  const leavePlanHandle = () => {
    const todayDate = new Date();
    const firstDayOfLeave = new Date(firstDate);
    const lastDayOfLeave = new Date(lastDate);
    if (leaveData.getData().length != 0) {
      const parseArr = leaveData.getData().map((e: { startDateOfLeave: string | number | Date; endDateOfLeave: string | number | Date; }) => {
        const [startDateRest] = new Date(e.startDateOfLeave)
          .toISOString()
          .split("T");
        const [endDateRest] = new Date(e.endDateOfLeave)
          .toISOString()
          .split("T");
        const parseObj = {
          startDateRest,
          endDateRest,
        };
        return parseObj;
      });
      //   .some(e => {
      //   const foo = new Date(e.startDateRest);
      //   const bar = new Date(e.endDateRest);
      //   return;
      // });
      console.log(parseArr);
    }

    if (todayDate > firstDayOfLeave || todayDate > lastDayOfLeave) {
      handleWarnMess(
        todayDate,
        "The date of the first or last day of leave cannot be later than the day on which leave is taken.",
      );
      return;
    }
    if (firstDayOfLeave.toDateString() === "Invalid Date" || lastDayOfLeave.toDateString() === "Invalid Date") {
      handleWarnMess(
        todayDate,
        "The first or last day of rest cannot be equal to undefined.",
      );
      return;
    }
    if (leave == "none" || leave == null) {
      handleWarnMess(
        todayDate,
        "The leave type value cannot be null or undefined. Select a value from the list.",
      );
      return;
    }
    if (personReplace == "none" || personReplace == null) {
      handleWarnMess(
        todayDate,
        "The person who is to replace you cannot be null or undefined. Select a value from the list.",
      );
      return;
    }
    const leavePlanDataGet = leaveData.getData();
    const leaveObj = new Leave(
      userData.id,
      leave,
      firstDate,
      lastDate,
      personReplace,
    );
    leavePlanDataGet.push(leaveObj);
    leaveData.setData(leavePlanDataGet);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const leaveDataRender = () => {
      const data = leaveData.getData();
      const confirmLeaveArr = leaveConfirmData.getData();
      const filterData = (arr :any) => arr.filter((el: any)=> el.personId === userData.id);
      setDataRender(filterData(data));
      setDataRenderConfirm(filterData(confirmLeaveArr));
      return filterData;
    };

    leaveDataRender();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const leaveObj = new Leave();
  const dayFun = (personId: string, leaveId: any) =>
    leaveObj.leaveCounter(personId).filter((el: { leaveNumber: any; }) => el.leaveNumber === leaveId);

  const menuListArr = ["Confirm", "Cancel"];
  const searchLeaveObj = (obj: { leaveData: any; e: any; }) => {
    const [item] = obj.leaveData
      .getData()
      .filter((el: { leaveId: any; }) => el.leaveId == obj.e.leaveId);
    return item;
  };

  const removeObjOfDatabase = (
    toWhichDatabaseWeSendTheData: Data,
    toWhichDatabaseWeRemoveTheData: Data,
    item: any,
    e: { leaveId: any; },
  ) => {
    const data = toWhichDatabaseWeSendTheData.getData();
    data.push(item);
    toWhichDatabaseWeSendTheData.setData(data);
    const filterData = toWhichDatabaseWeRemoveTheData
      .getData()
      .filter((el: any) => el.leaveId != e.leaveId);
    toWhichDatabaseWeRemoveTheData.setData(filterData);
  };

  const handleActionLeave = (e: any) => {
    switch (e.name) {
      case "Confirm": {
        const item = searchLeaveObj({ leaveData, e });
        if (booleanValue == true) {
          removeObjOfDatabase(leaveConfirmData, leaveData, item, e);
        }
        setCount(count + 1);
        break;
      }
      case "Cancel": {
        const item = searchLeaveObj({ leaveData, e });
        removeObjOfDatabase(leaveCancelData, leaveData, item, e);
        setCount(count + 1);
      }
    }
  };
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LeavePlanContext.Provider
      value={{
        setFirstDate,
        setLastDate,
        leaveArr,
        setLeave,
        setPersonReplace,
        personReplaceArr,
        leavePlanHandle,
        dataRender,
        leave,
        personReplace,
        dayFun,
        menuListArr,
        handleActionLeave,
        dataRenderConfirm,
        warnMess,
      }}
    >
      {children}
    </LeavePlanContext.Provider>
  );
}

export default LeavePlanContext;
