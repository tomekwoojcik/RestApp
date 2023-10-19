export const initState = {
  subordinatesArr: [],
  page: 0,
  rowsPerPage: 5,
  employeeLeave: [],
  employeeObj: {},
  supervisorButtonName: null,
  anchorEl: null,
  leaveId: null,
  toggleRender: false,
  rejectRestArr: [],
  supervisorComment : ""
};

export enum REDUCER_ACTION_TYPE {
  GET_SUBORDINATES,
  HANDLE_CHANGE_PAGE,
  HANDLE_CHANGE_ROWS_PER_PAGE,
  GET_EMPLOYEE_LEAVE,
  GET_EMPLOYEE_OBJ,
  GET_SUPERVISOR_BUTTON_NAME,
  SET_ANCHOR_EL,
  GET_LEAVE_ID,
  TOGGLE_RENDER,
  REJECT_REST_ARR,
  HANDLE_SUPERVISOR_COMMENT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: any;
};

export const reducer = (state: typeof initState, action: ReducerAction) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.GET_SUBORDINATES:
      return { ...state, subordinatesArr: action.payload ?? [] };
    case REDUCER_ACTION_TYPE.HANDLE_CHANGE_PAGE:
      return { ...state, page: action.payload ?? 0 };
    case REDUCER_ACTION_TYPE.HANDLE_CHANGE_ROWS_PER_PAGE:
      return { ...state, rowsPerPage: action.payload ?? 5 };
    case REDUCER_ACTION_TYPE.GET_EMPLOYEE_LEAVE:
      return { ...state, employeeLeave: action.payload ?? [] };
    case REDUCER_ACTION_TYPE.GET_EMPLOYEE_OBJ:
      return { ...state, employeeObj: action.payload ?? {} };
    case REDUCER_ACTION_TYPE.GET_SUPERVISOR_BUTTON_NAME:
      return { ...state, supervisorButtonName: action.payload ?? null };
    case REDUCER_ACTION_TYPE.SET_ANCHOR_EL:
      return { ...state, anchorEl: action.payload ?? null };
    case REDUCER_ACTION_TYPE.GET_LEAVE_ID:
      return { ...state, leaveId: action.payload ?? null };
    case REDUCER_ACTION_TYPE.TOGGLE_RENDER:
      return { ...state, toggleRender: action.payload ?? false };
    case REDUCER_ACTION_TYPE.REJECT_REST_ARR:
      return { ...state, rejectRestArr: action.payload ?? {} };
      case REDUCER_ACTION_TYPE.HANDLE_SUPERVISOR_COMMENT:
    return{...state, supervisorComment:action.payload ?? ""}
  }
};
