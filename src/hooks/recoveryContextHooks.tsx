const arrError: string[] = [];
export const initState = {
  recoveryAccount: "",
  arrError,
};

export enum REDUCER_ACTION_TYPE {
  HANDLE_INPUT,
  HANDLE_ERROR,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
  errors?: string[];
};

export const reducer = (
  state: typeof initState,
  action: ReducerAction,
): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.HANDLE_INPUT:
      return { ...state, recoveryAccount: action.payload ?? "" };
    case REDUCER_ACTION_TYPE.HANDLE_ERROR:
      return { ...state, arrError: action.errors ?? [] };
    default: {
      throw new Error();
    }
  }
};
