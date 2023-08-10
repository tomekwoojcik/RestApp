export const initState = {
  loginInput: "",
  passwordInput: "",
}; // obiekt przetrzymujący stan wartości
export enum REDUCER_ACTION_TYPE {
  LOGIN_INPUT,
  PASSWORD_INPUT,
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
    case REDUCER_ACTION_TYPE.PASSWORD_INPUT:
      return { ...state, passwordInput: action.payload ?? "" };
      break;
    default:
      throw new Error();
  }
};
