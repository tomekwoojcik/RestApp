import React, { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import Data from "./localhostContext";
import { props } from "../../interface/interfaceProps";

type HandleValueFunction = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  input: any,
) => any;

interface LoginPageContextType {
  handleValue: HandleValueFunction;
  setLoginValue: React.Dispatch<React.SetStateAction<string>>;
  setPasswordValue: React.Dispatch<React.SetStateAction<string>>;
  toggleValue: () => void;
  toggleLogin: boolean;
  loginHandle: () => Promise<void>;
  handleUser: any;
  handleError: string[];
}

const LoginPageContext = createContext({} as LoginPageContextType);

export function LoginPageProvider({ children }: props) {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [toggleLogin, setToggleLogin] = useState(false);
  const [handleUser, setHandleUser] = useState();
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

  useMemo(() => handleUser, [handleUser]);
  const loginHandle = async () => {
    try {
      const res = await fetch(" http://localhost:3000/login", {
        method: "post" /* or POST/PUT/PATCH/DELETE */,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: `${loginValue}`,
          password: `${passwordValue}`,
          // expiresInMins: 60, // optional
        }),
      }).then(response => response.json());

      const { accessToken, user } = res;
      const resUser = await fetch(
        ` http://localhost:3000/600/users/${user.id}`,
        {
          method: "get" /* or POST/PUT/PATCH/DELETE */,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        },
      ).then(response => response.json());
      setHandleUser(resUser);
    } catch (error: any) {
      console.log(typeof(error))
      throw new Error(error.message);
    }
  };
  useEffect(() => {
    if (!handleUser) {
      // eslint-disable-next-line no-useless-return
      return;
    }
    nav("user");
    const userData = new Data("user");
    userData.setData(handleUser);
  }, [handleUser, nav]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
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
