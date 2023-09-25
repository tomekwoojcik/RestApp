import { FC } from "react";
import { subordinatesArr } from "../../context/supervisorContext";
import EmployeeTable from "../../molecules/employeTable/employeeTable";

const WorkersList: FC = () => {

  console.log(subordinatesArr);
  return <div>
    <EmployeeTable subordinatesArr={subordinatesArr} />
  </div>;
};

export default WorkersList;
