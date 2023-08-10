export enum INIT_STATE {loginInput}

export const initState = { INIT_STATE: "" };// obiekt przetrzymujący stan wartości

export enum REDUCER_ACTION_TYPE {
    HANDLE_INPUT,
} // enum przetrzymujący nazwy operacji które będziemy wykonywać na reducer

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
}; // opisujemy typ akcji wrzucając dp typu enum

export const reducer = (
  state: typeof initState,
  action: ReducerAction,
): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.HANDLE_INPUT:
      return { ...state, [initState.]: action.payload ?? "" };
      break;
    default:
      throw new Error();
  }
};
