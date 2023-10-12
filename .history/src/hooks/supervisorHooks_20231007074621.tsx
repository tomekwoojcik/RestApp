export const initState = {
  subordinatesArr: [],
  page: 0,
  rowsPerPage: 5,
  employeeLeave: [],
  employeeObj: {},
  supervisorButtonName: null,
};

export enum REDUCER_ACTION_TYPE {
  GET_SUBORDINATES,
  HANDLE_CHANGE_PAGE,
  HANDLE_CHANGE_ROWS_PER_PAGE,
  GET_EMPLOYEE_LEAVE,
  GET_EMPLOYEE_OBJ,
  GET_SUPERVISOR_BUTTON_NAME,
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
  }
};
