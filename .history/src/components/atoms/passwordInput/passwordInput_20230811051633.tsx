import { Input } from "@mui/material";
import { ChangeEvent, FC, useContext } from "react";
import LoginPageContext from "../../context/loginPageContext";
import { REDUCER_ACTION_TYPE } from "../../../hooks/loginPageHooks";

const PasswordInput: FC = () => {
  const { handleValue } = useContext(LoginPageContext);
  return (
    // eslint-disable-next-line arrow-parens
    <Input
      type="password"
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        handleValue(e, REDUCER_ACTION_TYPE.PASSWORD_INPUT)
      }
    />
  );
};

export default PasswordInput;
