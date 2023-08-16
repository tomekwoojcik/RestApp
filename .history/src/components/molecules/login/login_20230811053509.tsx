import { Button } from "@mui/material";
import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import LoginInput from "../../atoms/loginInput/loginInput";
import LoginPageContext from "../../context/loginPageContext";
import PasswordInput from "../../atoms/passwordInput/passwordInput";
import LoginModule from "./Login.module.scss";

const Login: FC = () => {
  const { state, toggleValue, toggleLogin, loginHandle, handleError } = useContext(
    LoginPageContext,
  );
  console.log(state);
  return (
    <form className={LoginModule.login}>
      {state ? <PasswordInput /> : <LoginInput />}
      {toggleLogin ? (
        <Button
          variant="contained"
          color="primary"
          className={LoginModule.loginButton}
          id="loginButton"
          onClick={() => loginHandle()}
        >
          {" "}
          LogIn{" "}
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          className={LoginModule.loginButton}
          id="loginButton"
          onClick={() => toggleValue()}
        >
          {" "}
          Continue{" "}
        </Button>
      )}
      <p>OR</p>
      <Link to="/recoveryPassword">Recover your account.</Link>
      <ul>
        {!handleError
          ? null
          : handleError.map(el => <li key={Math.random()}>{el}</li>)}
      </ul>
    </form>
  );
};

export default Login;
