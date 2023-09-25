import { FC, useContext } from "react";
import { SupervisorContext } from "../../context/supervisorContext";

const WorkersList: FC = () => {
  const { foo } = useContext(SupervisorContext);
  console.log(foo);
  return <div></div>;
};

export default WorkersList;
