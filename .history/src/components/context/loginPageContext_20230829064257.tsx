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
import { userLoginApi } from "./responseClient";
import { getLoggedUser } from "./responseUser";

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
      payload: true,
    });

  const handleError = (textError: string) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.HANDLE_ERROR,
      payload: [...state.errorArr, textError],
    });
  };
  const toggleValue = () => {
    if (filterLogin.length !== 0) {
      handleError(
        "The user is being recovered, please try again later or contact your administrator.",
      );
      return;
    }
    if (state.loginInput.length < 5) {
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
      const resClient = await userLoginApi(state.loginInput, state.passwordInput);
      console.log(resClient.data.accessToken);
      localStorage.setItem("token", resClient.data.accessToken);
      const resUser = await getLoggedUser(resClient.data);
      dispatch({
        type: REDUCER_ACTION_TYPE.HANDLE_USER,
        payload: resClient.data.user,
      });
    } catch (error:any) {
      throw new Error(error.message);
    }
  };
  useEffect(() => {
    if (!state.isLogged) {
      nav("/");
      return;
    }
    nav("user");
    const userData: Data = new Data("user");
    userData.setData(state.user);
  }, [state.user, nav]);
  
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
