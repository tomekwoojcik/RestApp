import React, {
  ChangeEvent,
  createContext,
  useEffect,
  useReducer,
} from "react";
import { useNavigate } from "react-router";
import Data from "./localhostContext";
import { propsModel } from "../../interface/interfaceProps";
import { LoginPageContextModel } from "../../interface/LoginPageContextModel";
import {
  initState,
  reducer,
  REDUCER_ACTION_TYPE,
} from "../../hooks/loginPageHooks";
import { responseClient } from "./responseClient";
import { responseUser } from "./responseUser";

const LoginPageContext = createContext({} as LoginPageContextModel);

export function LoginPageProvider({ children }: propsModel) {
  const [state, dispatch] = useReducer(reducer, initState);
  const data = new Data("recoveryUserList");
  const dataEl = data.getData();
  const nav = useNavigate();
  const handleValue = (
    e: ChangeEvent<HTMLInputElement>,
    type: REDUCER_ACTION_TYPE,
  ) =>
    dispatch({
      type: type,
      payload: e.target.value,
    });

  const filterLogin: object[] = dataEl.filter(
    (el: any) => el.userId === state.loginInput,
  );
  const handleLogin = (): void =>
    dispatch({
      type: REDUCER_ACTION_TYPE.TOGGLE_LOGIN,
      toggle: true,
    });

  const handleError = (textError: string) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.HANDLE_ERROR,
      errors: [...state.errorArr, textError],
    });
  };
  console.log(state.loginInput.length);
  const toggleValue = () => {
    if (filterLogin.length !== 0) {
      handleError(
        "The user is being recovered, please try again later or contact your administrator.",
      );
      return;
    }
    if (state.loginInput.length < 5) {
      console.log(true);
      handleError(
        "The user is not correct, please try again later or contact your administrator.",
      );
      return;
    }

    handleLogin();
  };

  const loginHandle = async (): Promise<void> => {
    if (state.passwordInput.length < 5) {
      handleError(
        "The user is not correct, please try again later or contact your administrator.",
      );
      return;
    }

    try {
      const resClient = await responseClient(state.loginInput, state.passwordInput);
      console.log(resClient);
      localStorage.setItem("foo", "bar");
      const resUser = await responseUser(resClient);
      console.log(resUser);
      dispatch({
        type: REDUCER_ACTION_TYPE.HANDLE_USER,
        handle: resUser,
      });
      dispatch({
        type: REDUCER_ACTION_TYPE.IS_LOGGED,
        toggle: true,
      });
    } catch (error:any) {
      throw new Error(error.message);
    }
  };
  useEffect(() => {
    if (!state.isLogged) {
      return;
    }
    nav("user");
    const userData: Data = new Data("user");
    userData.setData(state.user);
  }, [state.isLogged, nav]);

  return (
    <LoginPageContext.Provider
      value={{
        state,
        handleValue,
        toggleValue,
        loginHandle,
      }}
    >
      {children}
    </LoginPageContext.Provider>
  );
}

export default LoginPageContext;
