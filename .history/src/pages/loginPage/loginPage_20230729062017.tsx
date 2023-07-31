import { FC } from 'react';
import LoginContainerBackground from '../../components/atoms/loginContainerBackground/loginContainerBackground';
import LoginContainer from '../../components/organisms/loginContainer/loginContainer';

const LoginPages: FC = () => {
  return (
    <div className="urlopApp__loginPages">
      <LoginContainer />
      <LoginContainerBackground />
    </div>
  );
}

export default LoginPages;
