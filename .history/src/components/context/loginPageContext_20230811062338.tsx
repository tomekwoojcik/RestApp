import React, {
  ChangeEvent,
  createContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { useNavigate } from "react-router";
import Data from "./localhostContext";
import { propsModel } from "../../interface/interfaceProps";
import { ResponseModel } from "../../interface/responseModel";
import { LoginPageContextModel } from "../../interface/LoginPageContextModel";
import {
  initState,
  reducer,
  REDUCER_ACTION_TYPE,
} from "../../hooks/loginPageHooks";

const LoginPageContext = createContext({} as LoginPageContextModel);

export function LoginPageProvider({ children }: propsModel) {
  const [state, dispatch] = useReducer(reducer, initState);
  const [toggleLogin, setToggleLogin] = useState(false);
  const [handleUser, setHandleUser] = useState<object>();
  const [handleError, setHandleError] = useState<string[]>([]);
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

  const filterLogin = dataEl.filter(
    (el: any) => el.userId === state.loginInput,
  );
  const handleLogin = () :void =>
    dispatch({
      type: REDUCER_ACTION_TYPE.TOGGLE_LOGIN,
      toggle: true,
    });

  const toggleValue = () => {
    if (filterLogin.length === 1) {
      dispatch({
        type: REDUCER_ACTION_TYPE.HANDLE_ERROR,      
      });
      const errors = [
        ...handleError,
        "The user is being recovered, please try again later or contact your administrator.",
      ];
      setHandleError(errors);
      return;
    }
    if (state.loginInput.length < 5) {
      const errors = [
        ...handleError,
        "The user is not correct, please try again later or contact your administrator.",
      ];
      setHandleError(errors);
      return;
    }
    handleLogin();
  };

  useMemo(() => handleUser, [handleUser]);
  const loginHandle = async (): Promise<void> => {
    try {
      const res: ResponseModel = await fetch(" http://localhost:3000/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: `${state.loginInput}`,
          password: `${state.passwordInput}`,
        }),
      }).then(response => response.json());
      const { accessToken, user }: ResponseModel = res;
      const resUser: ResponseModel["user"] = await fetch(
        ` http://localhost:3000/600/users/${user.id}`,
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        },
      ).then(response => response.json());
      setHandleUser(resUser);
    } catch (error:any) {
      throw new Error(error.message);
    }
  };
  useEffect(() => {
    if (!handleUser) {
      return;
    }
    nav("user");
    const userData: Data = new Data("user");
    userData.setData(handleUser);
  }, [handleUser, nav]);

  return (
    <LoginPageContext.Provider
      value={{
        state,
        handleValue,
        toggleValue,
        toggleLogin,
        loginHandle,
        handleUser,
        handleError,
      }}
    >
      {children}
    </LoginPageContext.Provider>
  );
}

export default LoginPageContext;
