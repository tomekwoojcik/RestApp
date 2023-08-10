export enum INIT_STATE_FIELD {
    LOGIN_INPUT = "loginInput",
    PASSWORD_INPUT = 'passwordInput'
}
export const initState = { loginInput: "" }; // obiekt przetrzymujący stan wartości
export enum REDUCER_ACTION_TYPE {
  HANDLE_INPUT,
} // enum przetrzymujący nazwy operacji które będziemy wykonywać na reducer

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  fieldName: INIT_STATE_FIELD;
  payload?: string;
}; // opisujemy typ akcji wrzucając dp typu enum

export const reducer = (
  state: typeof initState,
  action: ReducerAction,
): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.HANDLE_INPUT:
      return { ...state, [action.fieldName]: action.payload ?? "" };
      break;
    default:
      throw new Error();
  }
};
