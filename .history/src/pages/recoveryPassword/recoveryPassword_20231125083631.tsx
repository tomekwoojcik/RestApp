import { Link } from "react-router-dom";
import RecoveryForm from "../../components/molecules/recoveryForm/recoveryForm";
import { RecoveryProvider } from "../../components/context/recoveryContext";
import { FC } from "react";
import RecoveryPasswordModule from "./RecoveryPassword.module.scss";

const RecoveryPassword: FC = () => {
  return (
    <RecoveryProvider>
      <div className={RecoveryPasswordModule.background}>
        <div>
          <h2>Forgot Password</h2>
          <p>Contact your supervisor or accounting for a temporary password.</p>
          <p>or</p>
          <p>Enter your ID into the form and wait for an answer.</p>
          <RecoveryForm />
          <Link to="/">Go back to the login page.</Link>
        </div>
      </div>
    </RecoveryProvider>
  );
};

export default RecoveryPassword;
