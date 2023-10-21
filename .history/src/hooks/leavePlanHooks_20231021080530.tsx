export type DateObjType = {
  $d?: string;
};

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
  booleanValue: true,
  counter: 1,
  page: 0,
  rowsPerPage: 5,
  leaveRequestsAwaitingResponseArr: [],
  leaveRequestsCancelArr:[],
};

export enum REDUCER_ACTION_TYPE {
  FIRST_DAY,
  LAST_DAY,
  KIND_LEAVE,
  REPLACE_PERSON,
  DATA_RENDER,
  DATA_CONFIRMED_RENDER,
  ARR_ERROR_MESSAGE,
  SET_BOOLEAN_VALUE,
  COUNTER,
  HANDLE_CHANGE_PAGE,
  HANDLE_CHANGE_ROWS_PER_PAGE,
  HANDLE_LEAVE_REQUESTS_AWAITING_RESPONSE_ARR,
  HANDlE_LEAVE_REQUESTS_CANCEL_ARR,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: any;
};

export const reducer = (state: typeof initState, action: ReducerAction) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.FIRST_DAY:
      return { ...state, firstDay: action.payload ?? {} };
    case REDUCER_ACTION_TYPE.LAST_DAY:
      return { ...state, lastDay: action.payload ?? {} };
    case REDUCER_ACTION_TYPE.KIND_LEAVE:
      return { ...state, kindLeave: action.payload ?? "" };
    case REDUCER_ACTION_TYPE.REPLACE_PERSON:
      return { ...state, replacePerson: action.payload ?? "" };
    case REDUCER_ACTION_TYPE.ARR_ERROR_MESSAGE:
      return { ...state, arrayErrorMessage: action.payload ?? {} };
    case REDUCER_ACTION_TYPE.SET_BOOLEAN_VALUE:
      return { ...state, booleanValue: action.payload ?? true };
    case REDUCER_ACTION_TYPE.DATA_RENDER:
      return { ...state, dataRender: action.payload ?? [] };
    case REDUCER_ACTION_TYPE.COUNTER:
      return { ...state, counter: action.payload ?? 1 };
    case REDUCER_ACTION_TYPE.DATA_CONFIRMED_RENDER:
      return { ...state, dataConfirmedRender: action.payload ?? [] };
    case REDUCER_ACTION_TYPE.HANDLE_CHANGE_PAGE:
      return { ...state, page: action.payload ?? 0 };
    case REDUCER_ACTION_TYPE.HANDLE_CHANGE_ROWS_PER_PAGE:
      return { ...state, rowsPerPage: action.payload ?? 5 };
    case REDUCER_ACTION_TYPE.HANDLE_LEAVE_REQUESTS_AWAITING_RESPONSE_ARR:
      return { ...state, leaveRequestsAwaitingResponseArr: action.payload ?? [] };
    case REDUCER_ACTION_TYPE.HANDlE_LEAVE_REQUESTS_CANCEL_ARR:
      return { ...state, leaveRequestsCancelArr: action.payload ?? [] };
    default:
      throw new Error();
  }
};
