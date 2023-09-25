import { FC, useContext } from "react";
import { SupervisorContext } from "../../context/supervisorContext";

const WorkersList: FC = () => {
  const { responseApi } = useContext(SupervisorContext);
  console.log(responseApi);
  return <div></div>;
};

export default WorkersList;
