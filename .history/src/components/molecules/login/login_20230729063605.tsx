/* eslint-disable arrow-parens */
import { Button } from '@mui/material';
import { FC, useContext } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import LoginInput from '../../atoms/loginInput/loginInput';
import LoginPageContext from '../../context/loginPageContext';
import PasswordInput from '../../atoms/passwordInput/passwordInput';
import LoginModule from './login.module.scss';

const Login: FC = () => {
  const {
    toggleValue, toggleLogin, loginHandle, handleError,
  } = useContext(LoginPageContext);
  return (
    <form className="urlopApp__login">
      {toggleLogin ? <PasswordInput /> : <LoginInput />}
      {toggleLogin ? <Button variant="contained" color="primary" className="urlopApp__loginButton" id="loginButton" onClick={() => loginHandle()}> LogIn  </Button> : <Button variant="contained" color="primary" className="urlopApp__loginButton" id="loginButton" onClick={() => toggleValue()}> Continue  </Button>}
      <p className="urlopApp__loginParagraf urlopApp__loginParagrafSec">OR</p>
      <Link to="/recoveryPassword">Recover your account.</Link>
      <ul>
        {!handleError ? null : handleError.map(el => <li key={Math.random()}>{el}</li>)}
      </ul>
    </form>
  );
}

export default Login;
