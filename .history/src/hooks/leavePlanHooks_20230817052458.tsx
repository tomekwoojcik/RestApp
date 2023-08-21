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
  kindLeave :
};

export enum REDUCER_ACTION_TYPE {
  FIRST_DAY,
  LAST_DAY,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  handle?: Dayjs | null ;
};

export const reducer = (state: typeof initState, action: ReducerAction) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.FIRST_DAY:
      return { ...state, firstDay: action.handle ?? {} };
    case REDUCER_ACTION_TYPE.LAST_DAY:
      return { ...state, lastDay: action.handle ?? {} };
    default:
      throw new Error();
  }
};
