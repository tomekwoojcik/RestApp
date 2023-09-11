export const initState = {
  leaveRequestDataArr: [],
  renderCount: 0,
};

export enum REDUCER_ACTION_TYPE {
  GET_LEAVE_DATA,
  COUNTER,
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
        return{...state, renderCounter : action.payload??0}
    }
};
