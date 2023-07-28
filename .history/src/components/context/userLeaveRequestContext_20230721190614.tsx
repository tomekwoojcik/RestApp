/* eslint-disable no-useless-return */
/* eslint-disable max-len */
/* eslint-disable arrow-parens */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import Data from "./localhostContext";
import Leave from "./leaveObj";
// eslint-disable-next-line import/no-extraneous-dependencies

const UserLeaveRequestContext = createContext();

export function UserLeaveRequestProvider({ children }) {
  const [firstDate, setFirstDate] = useState();
  const [lastDate, setLastDate] = useState();
  const [leave, setLeave] = useState("none");
  const [personReplace, setPersonReplace] = useState("none");
  const [dataRender, setDataRender] = useState([]);
  const [count, setCount] = useState(1);

  const leaveData = new Data("leavePlan");
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
  const leavePlanHandle = () => {
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
    setCount(count + 1);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const leaveDataRender = () => {
      const data = leaveData.getData();
      const filterData = arr => arr.filter(el => el.personId === userData.id);
      setDataRender(filterData(data));
      return filterData;
    };

    leaveDataRender();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const leaveObj = new Leave();
  const dayFun = (personId, leaveId) =>
    leaveObj.leaveCounter(personId).filter(el => el.leaveNumber === leaveId);
  const menuListArr = ["Confirm", "Cancel"];

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserLeaveRequestContext.Provider
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
      }}
    >
      {children}
    </UserLeaveRequestContext.Provider>
  );
}

export default UserLeaveRequestContext;
