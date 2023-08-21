import { Dayjs } from "dayjs";

type DateObjType = {
  $d?: string;
};

const obj: DateObjType = {};
const firstDay: DateObjType = {};
const lastDay: DateObjType = {};
export const initState = {
  firstDay,
  lastDay,
  kindLeave: "",
};

export enum REDUCER_ACTION_TYPE {
  FIRST_DAY,
  LAST_DAY,
    KIND_LEAVE,
  
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  handle?: Dayjs | null;
  payload?: string;
};

export const reducer = (state: typeof initState, action: ReducerAction) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.FIRST_DAY:
      return { ...state, firstDay: action.handle ?? {} };
    case REDUCER_ACTION_TYPE.LAST_DAY:
      return { ...state, lastDay: action.handle ?? {} };
    case REDUCER_ACTION_TYPE.KIND_LEAVE:
          return { ...state, kindLeave: action.payload ?? "" };
      case REDUCER_ACTION_TYPE.KIND_LEAVE:
      return { ...state, kindLeave: action.payload ?? "" };
    default:
      throw new Error();
  }
};
