import { FC, useContext, useEffect, useState } from "react";
import LeavePlanContext from "../../context/leavePlanContext";
import MenuListLeavePlan from "../../molecules/menuListLeavePlan/menuListLeavePlan";
export interface DestructDetailsModel {
  // details: {
  //   personId: string;
  //   kindLeave: string;
  //   startDateOfLeave: string;
  //   endDateOfLeave: string;
  //   replacementPerson: string;
  //   leaveId: string;
  //   holidayWorkerApprovalStatus: string;
  // };
  key: number;
  obj: any;
}

const LeavePlanDetailsRow: FC<DestructDetailsModel> = ({ key, obj }) => {
  const [restStatus, setRestStatus] = useState<string>("after rest");
  const { dayFun } = useContext(LeavePlanContext);
  // const {
  //   details: {
  //     personId,
  //     kindLeave,
  //     startDateOfLeave,
  //     endDateOfLeave,
  //     replacementPerson,
  //     leaveId,
  //     holidayWorkerApprovalStatus,
  //   },
  // } = props;

  const [objLeave] = dayFun(obj.personId, obj.leaveId);

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
      <td>{obj.startDateOfLeave}</td>
      <td>{obj.endDateOfLeave}</td>
      <td>{obj.kindLeave}</td>
      <td>{obj.replacementPerson}</td>
      <td>{objLeave?.subtractDay}</td>
      <td>{objLeave?.howMuchTimeToStart}</td>
      <td>{restStatus}</td>
      <td>{obj.holidayWorkerApprovalStatus}</td>
      <td>
        <MenuListLeavePlan leaveId={obj.leaveId} />
      </td>
    </tr>
  );
};

export default LeavePlanDetailsRow;
