import { FC, useContext } from "react";
import { SupervisorContext, userToken } from "../../context/supervisorContext";

const WorkersList: FC = () => {
  const { foo } = useContext(SupervisorContext);
  const bar = foo(userToken);
  console.log(bar);
  
  return <div></div>;
};

export default WorkersList;
