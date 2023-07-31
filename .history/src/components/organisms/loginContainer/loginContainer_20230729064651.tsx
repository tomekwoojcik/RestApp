import { FC } from 'react';
import { LoginPageProvider } from '../../context/loginPageContext';
import Login from '../../molecules/login/login';
import LoginContainerModule from './LoginContainer.module.scss';

const LoginContainer: FC = () => {
  return (
    <LoginPageProvider>
      <div className={LoginContainerModule.loginContainer}>
        <h3 className={LoginContainerModule.loginContainerTitle}> Welcome back</h3>
        <p className={LoginContainerModule.loginContainerParagraph}>Please enter your details.</p>
        <Login />
      </div>
    </LoginPageProvider>
  );
}

export default LoginContainer;
