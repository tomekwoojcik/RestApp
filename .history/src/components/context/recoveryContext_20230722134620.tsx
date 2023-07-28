/* eslint-disable max-len */
/* eslint-disable arrow-parens */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Data from "./localhostContext";
import { props } from "../../interface/interfaceProps";

const RecoveryContext = createContext({});

export function RecoveryProvider({ children }: props) {
  const [handleInput, setHandleInput] = useState();
  const [handleError, setHandleError] = useState();
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
    // eslint-disable-next-line react/jsx-no-constructed-context-values
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
