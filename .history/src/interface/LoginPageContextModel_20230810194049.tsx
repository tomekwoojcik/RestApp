import { ChangeEvent } from "react";

type HandleValueFunction = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  input: any,
) => any;

export interface LoginPageContextModel {
  handleLoginInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePasswordInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleValue: HandleValueFunction;
  setPasswordValue: React.Dispatch<React.SetStateAction<string>>;
  toggleValue: () => void;
  toggleLogin: boolean;
  loginHandle: () => Promise<void>;
  handleUser: any;
  handleError: string[];
}

