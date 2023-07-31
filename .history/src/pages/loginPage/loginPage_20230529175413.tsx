import LoginContainerBackground from '../../components/atoms/loginContainerBackground/loginContainerBackground';
import LoginContainer from '../../components/organisms/loginContainer/loginContainer';

function LoginPages() {
  return (
    <div className="urlopApp__loginPages">
      <LoginContainer />
      <LoginContainerBackground />
    </div>
  );
}

export default LoginPages;
