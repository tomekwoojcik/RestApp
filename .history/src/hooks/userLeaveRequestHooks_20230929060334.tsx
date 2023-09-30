export const initState = {
  leaveRequestDataArr: [],
  renderCount: 0,
  page: 0,
  rowsPerPage: 5,
};

export enum REDUCER_ACTION_TYPE {
  GET_LEAVE_DATA,
  COUNTER,
  HANDLE_CHANGE_PAGE,
  HANDLE_CHANGE_ROWS_PER_PAGE,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: any;
};

export const reducer = (state: typeof initState, action: ReducerAction) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.GET_LEAVE_DATA:
      return { ...state, leaveRequestDataArr: action.payload ?? [] };
    case REDUCER_ACTION_TYPE.COUNTER:
      return { ...state, renderCounter: action.payload ?? 0 };
    case REDUCER_ACTION_TYPE.HANDLE_CHANGE_PAGE:
      return { ...state, page: action.payload ?? 0 };
    case REDUCER_ACTION_TYPE.HANDLE_CHANGE_ROWS_PER_PAGE:
      return { ...state, rowsPerPage: action.payload ?? 5 };
  }
};
