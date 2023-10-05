import { FC } from "react";
import {
  SupervisorProvider,
  subordinatesArr,
} from "../../context/supervisorContext";
import EmployeeTable from "../../molecules/employeeTable/employeeTable";
import EmployeeLeave from "../employeeLeave/employeeLeave";

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
