import { SupervisorProvider } from "../../context/supervisorContext";
import EmployeeLeaveTable from "../../molecules/employeeLeaveTable/employeeLeaveTable";

const EmployeeLeave = () => {
    return (
        <SupervisorProvider>
                <EmployeeLeaveTable/>
        </SupervisorProvider>
  );
};

export default EmployeeLeave;
