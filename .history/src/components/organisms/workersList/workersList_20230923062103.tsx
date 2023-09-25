import { FC, useContext } from "react";
import { SupervisorContext } from "../../context/supervisorContext";

const WorkersList: FC = () => {
  const { getUserTokenLocalStorage } = useContext(SupervisorContext);
  console.log(getUserTokenLocalStorage);
  return <div></div>;
};

export default WorkersList;
