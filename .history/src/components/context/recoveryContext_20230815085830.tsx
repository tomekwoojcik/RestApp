import { ChangeEvent, createContext, useReducer, useState } from "react";
import Data from "./localhostContext";
import { propsModel } from "../../interface/interfaceProps";
// import { initState } from "../../hooks/loginPageHooks";
import {
  initState,
  REDUCER_ACTION_TYPE,
  reducer,
} from "../../hooks/recoveryContextHooks";
interface RecoveryContextType {
  data: any;
  recovery: any;
  handleError: any;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
}
const RecoveryContext = createContext({} as RecoveryContextType);

export function RecoveryProvider({ children }: propsModel) {
  const [state, dispatch] = useReducer(reducer, initState);
  // const [handleInput, setHandleInput] = useState<string>();
  // const [handleError, setHandleError] = useState<any>([]);
  const data = new Data("recoveryUserList");
  data.setData([]);
  const param = data.getData();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.HANDLE_INPUT,
      payload: e.target.value,
    });
  };
  const handleError = (errorText: string) =>
    dispatch({
      type: REDUCER_ACTION_TYPE.HANDLE_ERROR,
      errors: [...state.arrError, errorText],
    });

  console.log(state.recoveryAccount);
  const recovery = () => {
    const date = new Date();
    if (!state.recoveryAccount) {
      handleError("Enter user id.");
      return;
    }
    if (!state.recoveryAccount.includes("@")) {
      handleError("User id is not a email.");
      return;
    }
    param.push({
      userId: handleInput,
      date: `${date.getDay()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}.${date.getMinutes()}`,
    });
    data.setData(param);
  };

  return (
    <RecoveryContext.Provider
      value={{
        data,
        recovery,
        handleError,
        handleInput,
      }}
    >
      {children}
    </RecoveryContext.Provider>
  );
}

export default RecoveryContext;
