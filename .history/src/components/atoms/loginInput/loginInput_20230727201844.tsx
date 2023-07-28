/* eslint-disable arrow-parens */
import { Input } from '@mui/material';
import { useContext } from 'react';
import LoginPageContext from '../../context/loginPageContext';
import LoginInputModule from './LoginInput.module.scss';

const LoginInput: React.FC = () => {
  const { handleValue, setLoginValue } = useContext(LoginPageContext);
  return (
    <Input onChange={e => { handleValue(e, setLoginValue); }} id={LoginInputModule["loginInput"]} className={LoginInputModule.loginInput} type="text" name="id" placeholder="Enter your email or work id." />
  );
}

export default LoginInput;