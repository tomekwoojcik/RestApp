import { ChangeEvent } from "react";
import { INIT_STATE_FIELD } from "../hooks/loginPageHooks";

type HandleValueFunction = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  input: any,
) => any;

export interface LoginPageContextModel {
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleValue: HandleValueFunction;
  setPasswordValue: React.Dispatch<React.SetStateAction<string>>;
  toggleValue: () => void;
  toggleLogin: boolean;
  loginHandle: () => Promise<void>;
  handleUser: any;
  handleError: string[];
}

