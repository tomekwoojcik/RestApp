import { FC, useContext } from "react";
import { SupervisorContext } from "../../context/supervisorContext";

const WorkersList: FC = () => {
  const { state } = useContext(SupervisorContext);
  console.log(state.subordinatesArr);
  return <div></div>;
};

export default WorkersList;
