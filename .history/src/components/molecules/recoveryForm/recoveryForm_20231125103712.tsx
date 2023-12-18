import { Button, TextField } from "@mui/material";
import { FC, useContext } from "react";
import RecoveryContext from "../../context/recoveryContext";
import RecoveryFormModule from "./RecoveryForm.module.scss";

const RecoveryForm: FC = () => {
  const { handleInput, recovery, state } = useContext(RecoveryContext);
  return (
    <form className={RecoveryFormModule.formBox}>
      <TextField
        id="outlined-basic"
        label="Enter your id."
        variant="outlined"
        onChange={handleInput}
      />
      <Button variant="contained" onClick={() => recovery()}>Recovery password</Button>
      <ul>
        {state.arrError.map((el: string) => (
          <li key={Math.random()}>{el}</li>
        ))}
      </ul>
    </form>
  );
};

export default RecoveryForm;
