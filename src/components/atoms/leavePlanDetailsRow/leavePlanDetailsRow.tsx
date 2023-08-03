import { FC, useContext, useEffect, useState } from "react";
import LeavePlanContext from "../../context/leavePlanContext";
import MenuListLeavePlan from "../../molecules/menuListLeavePlan/menuListLeavePlan";
import dayjs from "dayjs";

interface DestructDetailsInterface {
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

// interface DetailsInterface{
//   details: Object
// }

/* eslint-disable react/prop-types */
const LeavePlanDetailsRow: FC<DestructDetailsInterface> = (props) => {
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
  // zabezpieczyć !!!
  return (
    <li>
      <p>{`${startDateOfLeave} | ${endDateOfLeave} | ${kindLeave} | ${replacementPerson} | ${objLeave?.subtractDay} | ${objLeave?.howMuchTimeToStart} | ${restStatus} | ${holidayWorkerApprovalStatus}`}</p>
      <MenuListLeavePlan leaveId={leaveId} />
    </li>
  );
};

export default LeavePlanDetailsRow;
