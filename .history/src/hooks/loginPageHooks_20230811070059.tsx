const errorArr: string[] = [];
export const initState = {
  loginInput: "",
  passwordInput: "",
  toggleLogin: false,
  errorArr,
}; // obiekt przetrzymujący stan wartości
export enum REDUCER_ACTION_TYPE {
  LOGIN_INPUT,
  PASSWORD_INPUT,
  TOGGLE_LOGIN,
  HANDLE_ERROR,
} // enum przetrzymujący nazwy operacji które będziemy wykonywać na reducer

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
  toggle?: boolean;
  errors?: string[];
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
    case REDUCER_ACTION_TYPE.TOGGLE_LOGIN:
      return { ...state, toggleLogin: action.toggle ?? false };
      break;
    case REDUCER_ACTION_TYPE.HANDLE_ERROR:
      return { ...state, errorArr: action.errors ?? [] };
      break;
    default:
      throw new Error();
  }
};
