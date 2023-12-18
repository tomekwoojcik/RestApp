/* eslint-disable arrow-parens */
import { Button, TextField } from "@mui/material";
import { FC, useContext } from "react";
import RecoveryContext from "../../context/recoveryContext";
const RecoveryForm: FC = () => {
  const { handleInput, recovery, state } = useContext(RecoveryContext);
  return (
    <form className={}>
      <TextField
        id="outlined-basic"
        label="Enter your id."
        variant="outlined"
        onChange={handleInput}
      />
      <Button onClick={() => recovery()}>Recovery password</Button>
      <ul>
        {state.arrError.map((el: string) => (
          <li key={Math.random()}>{el}</li>
        ))}
      </ul>
    </form>
  );
};

export default RecoveryForm;
