import { Input } from '@mui/material';
import { useContext } from 'react';
import LoginPageContext from '../../context/loginPageContext';

function PasswordInput() {
  const { handleValue, setPasswordValue } = useContext(LoginPageContext);
  return (
    // eslint-disable-next-line arrow-parens
    <Input type="password" onChange={e => handleValue(e, setPasswordValue)} />
  );
}

export default PasswordInput;
