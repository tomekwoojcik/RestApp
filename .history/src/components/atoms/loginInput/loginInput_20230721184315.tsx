/* eslint-disable arrow-parens */
import { Input } from '@mui/material';
import { useContext } from 'react';
import LoginPageContext from '../../context/loginPageContext';

function LoginInput() {
  const { handleValue, setLoginValue } = useContext(LoginPageContext);
  return (
    <Input onChange={e => { handleValue(e, setLoginValue); }} id="loginInput" className="urlopApp__loginInput" type="text" name="id" placeholder="Enter your email or work id." />
  );
}

export default LoginInput;
