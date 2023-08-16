import { ChangeEvent } from "react";

type HandleValueFunction = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  input: any,
) => any;

export interface LoginPageContextModel {
  handleLoginInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePasswordInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleValue: HandleValueFunction;
  toggleValue: () => void;
  toggleLogin: boolean;
  loginHandle: () => void;
  handleUser: any;
  handleError: string[];
}

