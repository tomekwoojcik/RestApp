import { createContext, useState } from "react";
import Data from "./localhostContext";
import { propsModel } from "../../interface/interfaceProps";
interface RecoveryContextType {
  data: any;
  setHandleInput: any;
  recovery: any;
  handleError: any;
}
const RecoveryContext = createContext({} as RecoveryContextType);

export function RecoveryProvider({ children }: propsModel) {
  const [handleInput, setHandleInput] = useState<string>();
  const [handleError, setHandleError] = useState<any>([]);
  const data = new Data("recoveryUserList");
  data.setData([]);
  const param = data.getData();
  const recovery = () => {
    const date = new Date();
    if (!handleInput) {
      setHandleError("Enter user id.");
      return;
    }
    if (!handleInput.includes("@")) {
      setHandleError("User id is not a email.");
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
        setHandleInput,
        recovery,
        handleError,
      }}
    >
      {children}
    </RecoveryContext.Provider>
  );
}

export default RecoveryContext;
