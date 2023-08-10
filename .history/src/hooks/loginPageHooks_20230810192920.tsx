export enum INIT_STATE_FIELD {
    LOGIN_INPUT = "loginInput",
    PASSWORD_INPUT = 'passwordInput'
}
export const initState = { loginInput: "" }; // obiekt przetrzymujący stan wartości
export enum REDUCER_ACTION_TYPE {
  LOGIN_INPUT,
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
    case REDUCER_ACTION_TYPE.LOGIN_INPUT:
      return { ...state, loginInput: action.payload ?? "" };
      break;
    default:
      throw new Error();
  }
};
