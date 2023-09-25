import { FC, useContext } from "react";
import { SupervisorContext } from "../../context/supervisorContext";

const WorkersList: FC = () => {
  const { foo } = useContext(SupervisorContext);
  const userToken = localStorage.getItem("userToken");
  
  return <div></div>;
};

export default WorkersList;
