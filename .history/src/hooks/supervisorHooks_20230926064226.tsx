export const initState = {
  subordinatesArr: [],
  page: 0,
  rowsPerPage: 5,
};

export enum REDUCER_ACTION_TYPE {
  GET_SUBORDINATES,
  HANDLE_CHANGE_PAGE,
  HANDLE_CHANGE_ROWS_PER_PAGE,
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
          return {...state, rowsPerPage: action.payload ?? 5}
  }
};
