import { FC } from "react";
import { subordinatesArr } from "../../context/supervisorContext";
import EmployeeTable from "../../molecules/employeTable/employeeTable";

const WorkersList: FC = () => {
  return (
    
    <div>
      <EmployeeTable subordinatesArr={subordinatesArr} />
    </div>
  );
};

export default WorkersList;
