import { ChangeEvent } from "react";
import { REDUCER_ACTION_TYPE } from "../hooks/loginPageHooks";

type HandleValueFunction = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  input: any,
) => any;

export interface LoginPageContextModel {
  state: {
    loginInput: string;
    passwordInput: string;
    toggleLogin: boolean;
    errorArr: string[];
  };
  handleValue: (
    e: ChangeEvent<HTMLInputElement>,
    type: REDUCER_ACTION_TYPE,
  ) => void;
  toggleValue: () => void;
  toggleLogin: boolean;
  loginHandle: () => Promise<void>;
  handleUser: any;
  handleError: string[];
}
