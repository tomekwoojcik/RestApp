/* eslint-disable arrow-parens */
import { Button } from '@mui/material';
import { useContext } from 'react';
import RecoveryContext from '../../context/recoveryContext';

function RecoveryForm() {
  const { setHandleInput, recovery, handleError } = useContext(RecoveryContext);
  return (
    <form>
      <label htmlFor="recovery">
        Enter your id.
        <input onChange={el => setHandleInput(el.target.value)} id="recovery" type="text" />
      </label>
      <Button onClick={() => recovery()}>Recovery password</Button>
      <p>{!handleError ? null : handleError}</p>
    </form>
  );
}

export default RecoveryForm;
