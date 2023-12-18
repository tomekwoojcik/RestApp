import { Link } from "react-router-dom";
import RecoveryForm from "../../components/molecules/recoveryForm/recoveryForm";
import { RecoveryProvider } from "../../components/context/recoveryContext";
import { FC } from "react";
import RecoveryPasswordModule from "./RecoveryPassword.module.scss";
import PasswordIcon from "@mui/icons-material/Password";
import { Button } from "@mui/material";
const RecoveryPassword: FC = () => {
  return (
    <RecoveryProvider>
      <div className={RecoveryPasswordModule.masterBackground}>
        <div className={RecoveryPasswordModule.background}>
          <PasswordIcon className={RecoveryPasswordModule.passwordIcon} />
        </div>
        <div className={RecoveryPasswordModule.formRecovery}>
          <h2 className={RecoveryPasswordModule.headParagraph}>
            Forgot Password
          </h2>
          <p className={RecoveryPasswordModule.otherParagraph}>
            Contact your supervisor or accounting for a temporary password.
          </p>
          <p className={RecoveryPasswordModule.orParagraph}>or</p>
          <p className={RecoveryPasswordModule.otherParagraph}>
            Enter your ID into the form and wait for an answer.
          </p>
          <RecoveryForm />
          <Button variant="outlined">
            <Link to="/">Go back to the login page.</Link>
          </Button>
        </div>
      </div>
    </RecoveryProvider>
  );
};

export default RecoveryPassword;
