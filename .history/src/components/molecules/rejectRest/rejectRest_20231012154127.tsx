import { FC } from "react";
import RejectRestForm from "../../atoms/rejectRestForm/rejectRestForm";
import { SupervisorProvider } from "../../context/supervisorContext";
import RejectRestTable from "../../atoms/rejectRestTable/rejectRestTable";

const RejectRest: FC = () => {
  return (
      <SupervisorProvider>
        <RejectRestTable/>
      <RejectRestForm />
    </SupervisorProvider>
  );
};

export default RejectRest;
