/* eslint-disable arrow-parens */
import { Button } from "@mui/material";
import { FC, useContext } from "react";
import RecoveryContext from "../../context/recoveryContext";

const RecoveryForm: FC = () => {
  const { handleInput, recovery, state } = useContext(RecoveryContext);
  return (
    <form>
      <label htmlFor="recovery">
        Enter your id.
        <input onChange={handleInput} id="recovery" type="text" />
      </label>
      <Button onClick={() => recovery()}>Recovery password</Button>
      <ul>
        {state.arrError.map((el: any) => (
          <li key={Math.random()}>{el}</li>
        ))}
      </ul>
    </form>
  );
};

export default RecoveryForm;
