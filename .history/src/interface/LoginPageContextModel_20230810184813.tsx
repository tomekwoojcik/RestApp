import { ChangeEvent } from "react";

type HandleValueFunction = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  input: any,
) => any;

export interface LoginPageContextModel {
  handleTextInput: (e: ChangeEvent<HTMLInputElement>, key: string) => void;
  handleValue: HandleValueFunction;
  setPasswordValue: React.Dispatch<React.SetStateAction<string>>;
  toggleValue: () => void;
  toggleLogin: boolean;
  loginHandle: () => Promise<void>;
  handleUser: any;
  handleError: string[];
}
