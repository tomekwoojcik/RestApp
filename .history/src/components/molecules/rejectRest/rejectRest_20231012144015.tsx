import { FC } from "react";
import RejectRestForm from "../../atoms/rejectRestForm/rejectRestForm";
import { SupervisorProvider } from "../../context/supervisorContext";

const RejectRest: FC = () => {
  return (
    <SupervisorProvider>
      <RejectRestForm />
    </SupervisorProvider>
  );
};

export default RejectRest;
