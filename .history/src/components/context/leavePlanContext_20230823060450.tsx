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
import { DestructDetailsModel } from "../atoms/leavePlanDetailsRow/leavePlanDetailsRow";
interface LeavePlanItemModel {
  subtractDay: number;
  howMuchTimeToStart: number;
}
interface ErrorMessageModel {
  dateWarnMess: Date;
  warnMess: string;
}

interface ObjectDataModel {
   firstDay: DateObjType;
    lastDay: DateObjType;
    kindLeave: string;
    replacePerson: string;
}
interface DetailsModel {
  [x: string]: any;
   personId: string;
    kindLeave: string;
    startDateOfLeave: string;
    endDateOfLeave: string;
    replacementPerson: string;
    leaveId: string;
    holidayWorkerApprovalStatus: string;
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
    arrayErrorMessage: ErrorMessageModel[];
    dataRender: DetailsModel[];
  };
  leaveArr: string[];
  personReplaceArr: string[];
  dayFun: (personId: string, leaveId: string) => LeavePlanItemModel[];
  menuListArr: string[];
  handleActionLeave: (e: any) => void;
  dataRenderConfirm: object[];
  leavePlanHandle: () => void; // Add this property to the interface
}

const LeavePlanContext = createContext({} as LeavePlanContextModel);

export function LeavePlanProvider({ children }: propsModel) {
  const [state, dispatch] = useReducer(reducer, initState);
  const [dataRenderConfirm, setDataRenderConfirm] = useState<object[]>([]);
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
      payload: e,
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
  
      const setCount = () =>  dispatch({
      type: REDUCER_ACTION_TYPE.COUNTER,
      payload: state.counter -= 100000,
    })

  const destructObj = (day: any) => {
    if (day != state.firstDay) {
      const { $d } = state.lastDay as DateObjType;
      return $d;
    }

    const { $d } = state.firstDay as DateObjType;
    return $d;
  };

  const firstDay = destructObj(state.firstDay);
  const lastDay = destructObj(state.lastDay);

  const handleWarnMess = (date: Date, mess: string) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.ARR_ERROR_MESSAGE,
      payload:[...state.arrayErrorMessage, {
        dateWarnMess: date,
        warnMess: mess,
      },]
    });
    dispatch({
      type: REDUCER_ACTION_TYPE.SET_BOOLEAN_VALUE,
      payload:false,
    });
  };
  const leavePlanHandle = () => {
    const todayDate = new Date();
    const firstDayOfLeave = new Date(
      firstDay == undefined ? todayDate : firstDay,
    );
    const lastDayOfLeave = new Date(lastDay == undefined ? todayDate : lastDay);

    if (todayDate > firstDayOfLeave || todayDate > lastDayOfLeave) {
      handleWarnMess(
        todayDate,
        "The date of the first or last day of leave cannot be later than the day on which leave is taken.",
      );
      return;
    }

    if (firstDay == undefined || lastDay == undefined) {
         handleWarnMess(
        todayDate,
        "The date of the first or last day of leave cannot be undefined.",
      );
      return;
    }

    if (
      firstDayOfLeave.toDateString() === "Invalid Date" ||
      lastDayOfLeave.toDateString() === "Invalid Date" ||
      firstDay == undefined ||
      lastDay == undefined
    ) {
      handleWarnMess(
        todayDate,
        "The first or last day of rest cannot be equal to undefined.",
      );
      return;
    }

    if (state.kindLeave == "none" || state.kindLeave == null || state.kindLeave == "") {
      handleWarnMess(
        todayDate,
        "The leave type value cannot be null or undefined. Select a value from the list.",
      );
      return;
    }

    if (state.replacePerson == "none" || state.replacePerson == null || state.replacePerson == "") {
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
      firstDay,
      lastDay,
      state.replacePerson,
    );
    const arrLeavePlanDataGet = [...leavePlanDataGet, leaveObj];
    leaveData.setData(arrLeavePlanDataGet);
    setCount();
  };


  useEffect(() => {
    const leaveDataRender = () => {
      const data = leaveData.getData();
      const confirmLeaveArr = leaveConfirmData.getData();
      const filterData = (arr: []) =>
        arr.filter((el: any) => el.personId === userData.id);
      dispatch({
        type: REDUCER_ACTION_TYPE.DATA_RENDER,
        payload: [...filterData(data)],
      });
      dispatch({
        type: REDUCER_ACTION_TYPE.DATA_CONFIRMED_RENDER,
        payload: [...confirmLeaveArr],
      })
      // setDataRenderConfirm(filterData(confirmLeaveArr));
      return filterData;
    };

    leaveDataRender();
  }, [state.counter]);

  const leaveObj = new Leave();
  const dayFun = (personId: string, leaveId: any) =>
    leaveObj
      .leaveCounter(personId)
      .filter((el: { leaveNumber: any }) => el.leaveNumber === leaveId);

  const menuListArr = ["Confirm", "Cancel"];
  const searchLeaveObj = (obj: { leaveData: any; e: any }) => {
    const data = new Data(obj.leaveData.databaseName)
    const [item] = data
      .getData()
      .filter((el: { leaveId: any }) => el.leaveId == obj.e.leaveId);
    console.log(item);
    return item;
  };

  const removeObjOfDatabase = (
    toWhichDatabaseWeSendTheData: Data,
    toWhichDatabaseWeRemoveTheData: Data,
    item: any,
    e: { leaveId: any },
  ) => {
    const data = toWhichDatabaseWeSendTheData.getData();
    const newData = [...data, item];
    toWhichDatabaseWeSendTheData.setData(newData);
    const filterData = toWhichDatabaseWeRemoveTheData
      .getData()
      .filter((el: any) => el.leaveId != e.leaveId);
    toWhichDatabaseWeRemoveTheData.setData(filterData);
  };

  const handleActionLeave = (e: any) => {
    switch (e.name) {
      case "Confirm": {
        const item = searchLeaveObj({ leaveData, e });
        if (state.booleanValue == true) {
          removeObjOfDatabase(leaveConfirmData, leaveData, item, e);
        }
        setCount();
        break;
      }
      case "Cancel": {
        const item = searchLeaveObj({ leaveData, e });
        removeObjOfDatabase(leaveCancelData, leaveData, item, e);
        setCount();
        break;
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
        dayFun,
        menuListArr,
        handleActionLeave,
        dataRenderConfirm,
      }}
    >
      {children}
    </LeavePlanContext.Provider>
  );
}

export default LeavePlanContext;
