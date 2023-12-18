import { Button, TextField } from "@mui/material";
import { FC, useContext } from "react";
import RecoveryContext from "../../context/recoveryContext";
import RecoveryFormModule from "./RecoveryForm.module.scss";

const RecoveryForm: FC = () => {
  const { handleInput, recovery, state } = useContext(RecoveryContext);
  const arrError = [...new Set(state.arrError)];
  return (
    <form className={RecoveryFormModule.formBox}>
      <ul className={RecoveryFormModule.errList}>
        {arrError.map((el: string) => (
          <li key={Math.random()}>{el}</li>
        ))}
      </ul>
       <div>
      <TextField
        id="outlined-basic"
        label="Enter your id."
        variant="outlined"
        onChange={handleInput}
        className={RecoveryFormModule.fieldForm}
      />
      <Button
        className={RecoveryFormModule.recoveryButton}
        variant="contained"
        onClick={() => recovery()}
      >
        Recovery password
        </Button>
        </div>     
    </form>
  );
};

export default RecoveryForm;
