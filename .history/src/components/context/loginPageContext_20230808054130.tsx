import React, { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import Data from "./localhostContext";
import { propsModel } from "../../interface/interfaceProps";

type HandleValueFunction = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  input: any,
) => any;

interface LoginPageContextModel {
  handleValue: HandleValueFunction;
  setLoginValue: React.Dispatch<React.SetStateAction<string>>;
  setPasswordValue: React.Dispatch<React.SetStateAction<string>>;
  toggleValue: () => void;
  toggleLogin: boolean;
  loginHandle: () => Promise<void>;
  handleUser: any;
  handleError: string[];
}

const LoginPageContext = createContext({} as LoginPageContextModel);

export function LoginPageProvider({ children }: propsModel) {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [toggleLogin, setToggleLogin] = useState(false);
  const [handleUser, setHandleUser] = useState<object[]>();
  const [handleError, setHandleError] = useState<string[]>([]);
  const data = new Data("recoveryUserList");
  const dataEl = data.getData();
  const nav = useNavigate();
  const handleValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    input: any,
  ) => input(e.target.value);
  const filterLogin = dataEl.filter((el: any) => el.userId === loginValue);

  const toggleValue = () => {
    if (filterLogin.length === 1) {
      handleError.push(
        "The user is being recovered, please try again later or contact your administrator.",
      );
      setHandleError(handleError);
      return;
    }
    if (loginValue.length < 5) {
      handleError.push(
        "The user is not correct, please try again later or contact your administrator.",
      );
      setHandleError(handleError);
      return;
    }
    setToggleLogin(true);
  };

  interface ResponseModel {
    accessToken: string;
    user: object;
  }

  useMemo(() => handleUser, [handleUser]);
  const loginHandle = async (): Promise<void> => {
    try {
      const res = await fetch(" http://localhost:3000/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: `${loginValue}`,
          password: `${passwordValue}`,
        }),
      }).then(response => response.json());
      const { accessToken, user } = res;
      console.log(user);
      const resUser = await fetch(
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
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  useEffect(() => {
    if (!handleUser) {
      return;
    }
    nav("user");
    const userData = new Data("user");
    userData.setData(handleUser);
  }, [handleUser, nav]);

  return (
    <LoginPageContext.Provider
      value={{
        handleValue,
        setLoginValue,
        setPasswordValue,
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
