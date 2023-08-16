import { Dayjs } from "dayjs";

type DateObjType = {
  $d?: string;
};

const obj : DateObjType ={}

export const initState = {
  setFirstDay: obj,
  setLastDay: obj,
};

export enum REDUCER_ACTION_TYPE {
  SET_FIRST_DAY,
  SET_LAST_DAY,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  handle?: Dayjs | null;
};

export const reducer = (state: typeof initState, action: ReducerAction) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.SET_FIRST_DAY:
      return { ...state, setFirstDay: action.handle ?? {} };
    case REDUCER_ACTION_TYPE.SET_LAST_DAY:
      return { ...state, setFirstDay: action.handle ?? {} };
    default:
      throw new Error();
  }
};
