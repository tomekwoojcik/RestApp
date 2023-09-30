import { FC } from "react";
import { SupervisorProvider, subordinatesArr } from "../../context/supervisorContext";
import EmployeeTable from "../../molecules/employeTable/employeeTable";

const WorkersList: FC = () => {
  return (
    <SupervisorProvider>
    <div>
      <EmployeeTable subordinatesArr={subordinatesArr} />
      </div>
      </SupervisorProvider>
  );
};

export default WorkersList;
