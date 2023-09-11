import { FC, useContext, useEffect, useState } from "react";
import LeavePlanContext from "../../context/leavePlanContext";
import MenuListLeavePlan from "../../molecules/menuListLeavePlan/menuListLeavePlan";
export interface DestructDetailsModel{
  details: {
    personId: string;
    kindLeave: string;
    startDateOfLeave: string;
    endDateOfLeave: string;
    replacementPerson: string;
    leaveId: string;
    holidayWorkerApprovalStatus: string;
  };
}

const LeavePlanDetailsRow: FC<DestructDetailsModel> = (props) => {
  const [restStatus, setRestStatus] = useState<string>("after rest");
  const { dayFun } = useContext(LeavePlanContext);
  const {
    details: {
      personId,
      kindLeave,
      startDateOfLeave,
      endDateOfLeave,
      replacementPerson,
      leaveId,
      holidayWorkerApprovalStatus,
    },
  } = props;

  const [objLeave] = dayFun(personId, leaveId);

  useEffect(() => {
    if (objLeave?.howMuchTimeToStart < 0) {
      setRestStatus("during rest");
    } else if (objLeave?.howMuchTimeToStart > 0) {
      setRestStatus("before rest");
    }
  }, [objLeave?.howMuchTimeToStart]);
  //TODO zabezpieczyć !!!
  return (
    <tr>
      <td>
{startDateOfLeave}
      </td>
      <td>{endDateOfLeave}</td>
    <td>{kindLeave}</td>
      <td>{replacementPerson}</td>
      <td>{objLeave?.subtractDay}</td>
      <td>{objLeave?.howMuchTimeToStart}</td>
      <td>{restStatus}</td>
      <td>{holidayWorkerApprovalStatus}</td>
      <td><MenuListLeavePlan leaveId={leaveId} /></td>
    </tr>
  );
};

export default LeavePlanDetailsRow;
