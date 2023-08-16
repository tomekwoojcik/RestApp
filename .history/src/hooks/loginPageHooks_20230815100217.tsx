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
  payload?: string;
  toggle?: boolean;
  errors?: string[];
  handle?: object;
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
    case REDUCER_ACTION_TYPE.HANDLE_USER:
      return { ...state, user: action.handle ?? {} }
    case REDUCER_ACTION_TYPE.IS_LOGGED:
      return { ...state, isLogged: action.toggle ?? false };
      break;
    default:
      throw new Error();
  }
};
