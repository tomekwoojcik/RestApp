import { Dayjs } from "dayjs";

export type DateObjType = {
  $d?: string;
};

const obj: DateObjType = {};
const firstDay: DateObjType = {};
const lastDay: DateObjType = {};
export const initState = {
  firstDay,
  lastDay,
  kindLeave: "",
  replacePerson: "",
  dataRender: [],
    dataConfirmedRender: [],
  arrayErrorMessage: [],
};

export enum REDUCER_ACTION_TYPE {
  FIRST_DAY,
  LAST_DAY,
  KIND_LEAVE,
  REPLACE_PERSON,
  DATA_RENDER,
    DATA_CONFIRMED_RENDER,
    ARR_ERROR_MESSAGE,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  handle?: Dayjs | null;
  payload?: string;
  get?: object;
};

export const reducer = (state: typeof initState, action: ReducerAction) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.FIRST_DAY:
      return { ...state, firstDay: action.handle ?? {} };
    case REDUCER_ACTION_TYPE.LAST_DAY:
      return { ...state, lastDay: action.handle ?? {} };
    case REDUCER_ACTION_TYPE.KIND_LEAVE:
      return { ...state, kindLeave: action.payload ?? "" };
    case REDUCER_ACTION_TYPE.REPLACE_PERSON:
      return { ...state, replacePerson: action.payload ?? "" };
    //   case REDUCER_ACTION_TYPE.DATA_RENDER:
    //       return { ...state, dataRender: action.get ?? {} };
    default:
      throw new Error();
  }
};
