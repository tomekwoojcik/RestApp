type HandleValueFunction = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  input: any,
) => any;

export interface LoginPageContextModel {
  handleTextInput: () => void;
  handleValue: HandleValueFunction;
  setLoginValue: React.Dispatch<React.SetStateAction<string>>;
  setPasswordValue: React.Dispatch<React.SetStateAction<string>>;
  toggleValue: () => void;
  toggleLogin: boolean;
  loginHandle: () => Promise<void>;
  handleUser: any;
  handleError: string[];
}

