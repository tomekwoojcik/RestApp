import { ChangeEvent } from "react";
import { REDUCER_ACTION_TYPE } from "../hooks/loginPageHooks";

type HandleValueFunction = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  input: any,
) => any;

export interface LoginPageContextModel {
  handleTextInput: (
    e: ChangeEvent<HTMLInputElement>,
    actionType: REDUCER_ACTION_TYPE,
  ) => void;
  handleValue: HandleValueFunction;
  setPasswordValue: React.Dispatch<React.SetStateAction<string>>;
  toggleValue: () => void;
  toggleLogin: boolean;
  loginHandle: () => Promise<void>;
  handleUser: any;
  handleError: string[];
}
