import { ChangeEvent } from "react";
import { REDUCER_ACTION_TYPE, initState } from "../hooks/loginPageHooks";

type HandleValueFunction = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  input: any,
) => any;

export interface LoginPageContextModel {
  state: typeof initState;
  handleValue: HandleValueFunction;
  setPasswordValue: React.Dispatch<React.SetStateAction<string>>;
  toggleValue: () => void;
  toggleLogin: boolean;
  loginHandle: () => Promise<void>;
  handleUser: any;
  handleError: string[];
}
