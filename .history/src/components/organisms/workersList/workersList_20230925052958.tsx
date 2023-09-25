import { FC, useContext } from "react";
import { SupervisorContext, subordinatesArr } from "../../context/supervisorContext";
import EmployeeTable from "../../molecules/employeTable/employeeTable";

const WorkersList: FC = () => {

  console.log(subordinatesArr);
  return <div>
    <EmployeeTable  />
  </div>;
};

export default WorkersList;
