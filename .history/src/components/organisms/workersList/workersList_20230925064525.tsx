import { FC } from "react";
import { SupervisorProvider, subordinatesArr } from "../../context/supervisorContext";
import EmployeeTable from "../../molecules/employeTable/employeeTable";

const WorkersList: FC = () => {
  return (
    
    <div>
      <SupervisorProvider>
        <EmployeeTable subordinatesArr={subordinatesArr} />
        </SupervisorProvider>
    </div>
  );
};

export default WorkersList;
