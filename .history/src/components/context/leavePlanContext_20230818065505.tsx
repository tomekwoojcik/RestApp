import {
  ChangeEvent,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import Data from "./localhostContext";
import Leave from "./leaveObj";
import { propsModel } from "../../interface/interfaceProps";
import {
  initState,
  REDUCER_ACTION_TYPE,
  reducer,
  DateObjType,
} from "../../hooks/leavePlanHooks";
import { Dayjs } from "dayjs";
interface LeavePlanItemModel {
  subtractDay: number;
  howMuchTimeToStart: number;
}

interface LeavePlanContextModel {
  handleDay: (type: REDUCER_ACTION_TYPE, e: Dayjs | null) => void;
  handleValue: (
    e: ChangeEvent<HTMLInputElement>,
    type: REDUCER_ACTION_TYPE,
  ) => void;
  state: {
    firstDay: DateObjType;
    lastDay: DateObjType;
    kindLeave: string;
    replacePerson: string;
  };
  leaveArr: string[];
  personReplaceArr: string[];
  dataRender: any[];
  dayFun: (personId: string, leaveId: string) => LeavePlanItemModel[];
  menuListArr: string[];
  handleActionLeave: (e: any) => void;
  dataRenderConfirm: object[];
  warnMess: any[];
  leavePlanHandle: () => void; // Add this property to the interface
}

const LeavePlanContext = createContext({} as LeavePlanContextModel);

export function LeavePlanProvider({ children }: propsModel) {
  const [state, dispatch] = useReducer(reducer, initState);
  const [dataRender, setDataRender] = useState<any[]>([]);
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

  const handleDay = (type: REDUCER_ACTION_TYPE, e: Dayjs | null) => {
    dispatch({
      type: type,
      handle: e,
    });
  };

  const handleValue = (
    e: ChangeEvent<HTMLInputElement>,
    type: REDUCER_ACTION_TYPE,
  ) =>
    dispatch({
      type: type,
      payload: e.target.value,
    });

  const destructObj = () => {
      const { $d } = state.lastDay as DateObjType;
      return $d;
  };
  const handleWarnMess = (date: Date, mess: string) => {
    warnMess.push({
      dateWarnMess: date,
      warnMess: mess,
    });
    setWarnMess(warnMess);
    setBooleanValue(false);
  };

  const leavePlanHandle = () => {
    const lastDay: string | undefined = destructObj();
    console.log(lastDay);
    const todayDate = new Date();
    const firstDayOfLeave = new Date();
    const lastDayOfLeave = new Date();
    if (leaveData.getData().length != 0) {
      const parseArr = leaveData
        .getData()
        .map(
          (e: {
            startDateOfLeave: string | number | Date;
            endDateOfLeave: string | number | Date;
          }) => {
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
          },
        );
      return parseArr;
    }

    if (todayDate > firstDayOfLeave || todayDate > lastDayOfLeave) {
      handleWarnMess(
        todayDate,
        "The date of the first or last day of leave cannot be later than the day on which leave is taken.",
      );
      return;
    }

    if (
      firstDayOfLeave.toDateString() === "Invalid Date" ||
      lastDayOfLeave.toDateString() === "Invalid Date"
    ) {
      handleWarnMess(
        todayDate,
        "The first or last day of rest cannot be equal to undefined.",
      );
      return;
    }

    if (state.kindLeave == "none" || state.kindLeave == null) {
      handleWarnMess(
        todayDate,
        "The leave type value cannot be null or undefined. Select a value from the list.",
      );
      return;
    }

    if (state.replacePerson == "none" || state.replacePerson == null) {
      handleWarnMess(
        todayDate,
        "The person who is to replace you cannot be null or undefined. Select a value from the list.",
      );
      return;
    }

    const leavePlanDataGet = leaveData.getData();
    const leaveObj = new Leave(
      userData.id,
      state.kindLeave,
      // firstDate,
      // lastDate,
      state.replacePerson,
    );
    const arrleavePlanDataGet = [...leavePlanDataGet, leaveObj];
    leaveData.setData(arrleavePlanDataGet);
  };

  useEffect(() => {
    const leaveDataRender = () => {
      const data = leaveData.getData();
      const confirmLeaveArr = leaveConfirmData.getData();
      const filterData = (arr: any) =>
        arr.filter((el: any) => el.personId === userData.id);
      setDataRender(filterData(data));
      setDataRenderConfirm(filterData(confirmLeaveArr));
      return filterData;
    };

    leaveDataRender();
  }, [count]);

  const leaveObj = new Leave();
  const dayFun = (personId: string, leaveId: any) =>
    leaveObj
      .leaveCounter(personId)
      .filter((el: { leaveNumber: any }) => el.leaveNumber === leaveId);

  const menuListArr = ["Confirm", "Cancel"];
  const searchLeaveObj = (obj: { leaveData: any; e: any }) => {
    const [item] = obj.leaveData
      .getData()
      .filter((el: { leaveId: any }) => el.leaveId == obj.e.leaveId);
    return item;
  };

  const removeObjOfDatabase = (
    toWhichDatabaseWeSendTheData: Data,
    toWhichDatabaseWeRemoveTheData: Data,
    item: any,
    e: { leaveId: any },
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
    <LeavePlanContext.Provider
      value={{
        handleDay,
        handleValue,
        state,
        leaveArr,
        personReplaceArr,
        leavePlanHandle,
        dataRender,
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
