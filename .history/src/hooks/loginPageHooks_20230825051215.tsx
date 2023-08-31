const errorArr: string[] = [];
export const initState = {
  loginInput: "",
  passwordInput: "",
  toggleLogin: false,
  isLogged: false,
  errorArr,
  user:{}
}; // obiekt przetrzymujący stan wartości
export enum REDUCER_ACTION_TYPE {
  LOGIN_INPUT,
  PASSWORD_INPUT,
  TOGGLE_LOGIN,
  HANDLE_ERROR,
  HANDLE_USER,
  IS_LOGGED
} // enum przetrzymujący nazwy operacji które będziemy wykonywać na reducer

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: any;
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
      return { ...state, toggleLogin: action.payload ?? false };
      break;
    case REDUCER_ACTION_TYPE.HANDLE_ERROR:
      return { ...state, errorArr: action.payload ?? [] };
      break;
    case REDUCER_ACTION_TYPE.HANDLE_USER:
      return { ...state, user: action.payload ?? {} , isLogged: true };
      break;
    default:
      throw new Error();
  }
};
//TODO refactor handleUSer and isLogged