export const initState = {
    recoveryAccount: ""
};

export enum REDUCER_ACTION_TYPE {
    HANDLE_INPUT,
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE;
    payload?: string;
};

export const reducer = (
  state: typeof initState,
  action: ReducerAction,
): typeof initState => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.HANDLE_INPUT:
            return { ...state, recoveryAccount: action.payload ?? ""}
    default: {
      throw new Error();
    }
  }
};
