import { FC } from 'react';
import { LoginPageProvider } from '../../context/loginPageContext';
import Login from '../../molecules/login/login';

const LoginContainer: FC = () => {
  return (
    <LoginPageProvider>
      <div className="urlopApp__loginContainer">
        <h3 className="urlopApp__loginContainerTitle"> Welcome back</h3>
        <p className="urlopApp__loginContainerParagraph">Please enter your details.</p>
        <Login />
      </div>
    </LoginPageProvider>
  );
}

export default LoginContainer;
