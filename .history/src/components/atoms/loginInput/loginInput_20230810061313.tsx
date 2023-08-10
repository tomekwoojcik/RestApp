/* eslint-disable arrow-parens */
import { Input } from "@mui/material";
import { FC, useContext } from "react";
import LoginPageContext from "../../context/loginPageContext";
import LoginInputModule from "./LoginInput.module.scss";
import { REDUCER_ACTION_TYPE } from "../../../hooks/loginPageHooks";

const LoginInput: FC = () => {
  const { handleTextInput } = useContext(LoginPageContext);
  return (
    <Input
      onChange={handleTextInput, REDUCER_ACTION_TYPE.LOGIN_INPUT}
      id={LoginInputModule["loginInput"]}
      className={LoginInputModule.loginInput}
      type="text"
      name="id"
      placeholder="Enter your email or work id."
    />
  );
};

export default LoginInput;
