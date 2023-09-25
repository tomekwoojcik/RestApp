import { FC, useContext } from "react";
import { SupervisorContext } from "../../context/supervisorContext";

const WorkersList: FC = () => {
  const { subordinatesArr } = useContext(SupervisorContext);
  console.log(subordinatesArr);
  
  return <div></div>;
};

export default WorkersList;
