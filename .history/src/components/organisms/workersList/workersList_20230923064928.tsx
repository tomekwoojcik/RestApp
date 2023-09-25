import { FC, useContext } from "react";
import { SupervisorContext } from "../../context/supervisorContext";

const WorkersList: FC = () => {
  const { foo } = useContext(SupervisorContext);
  const data = localStorage.getItem("userToken");
  console.log(data);
  return <div></div>;
};

export default WorkersList;
