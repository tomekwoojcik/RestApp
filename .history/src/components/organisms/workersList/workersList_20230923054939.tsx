import { FC, useContext } from "react";
import { SupervisorContext } from "../../context/supervisorContext";

const WorkersList: FC = () => {
  const { dataValue } = useContext(SupervisorContext);
  console.log(dataValue);
  return <div></div>;
};

export default WorkersList;
