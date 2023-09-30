import { FC, useContext, useEffect, useState } from "react";
import LeavePlanContext from "../../context/leavePlanContext";
import MenuListLeavePlan from "../../molecules/menuListLeavePlan/menuListLeavePlan";
import { TableCell, TableRow } from "@mui/material";
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
  customKey: string;
  obj: any;
}

const LeavePlanDetailsRow: FC<DestructDetailsModel> = ({ customKey, obj }) => {
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
    <TableRow key={customKey}>
      <TableCell>{obj.startDateOfLeave}</TableCell>
      <TableCell>{obj.endDateOfLeave}</TableCell>
      <TableCell>{obj.kindLeave}</TableCell>
      <TableCell>{obj.replacementPerson}</TableCell>
      <TableCell>{objLeave?.subtractDay}</TableCell>
      <TableCell>{objLeave?.howMuchTimeToStart}</TableCell>
      <TableCell>{restStatus}</TableCell>
      <TableCell>{obj.holidayWorkerApprovalStatus}</TableCell>
      <TableCell>
        <MenuListLeavePlan leaveId={obj.leaveId} />
      </TableCell>
    </TableRow>
  );
};

export default LeavePlanDetailsRow;
