import RejectRestForm from "../../atoms/rejectRestForm/rejectRestForm";
import { SupervisorProvider } from "../../context/supervisorContext";

const RejectRest = () => {
  return (
    <SupervisorProvider>
      <RejectRestForm />
    </SupervisorProvider>
  );
};

export default RejectRest;
