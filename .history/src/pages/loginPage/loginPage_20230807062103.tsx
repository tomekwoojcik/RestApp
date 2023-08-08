import { FC } from "react";
import LoginContainerBackground from "../../components/atoms/loginContainerBackground/loginContainerBackground";
import LoginContainer from "../../components/organisms/loginContainer/loginContainer";
import LoginPageModule from "./LoginPage.module.scss";
const LoginPages: FC = () => {
  return (
    <div className={LoginPageModule.loginPages}>
      <LoginContainer />
      <LoginContainerBackground />
    </div>
  );
};

export default LoginPages;
