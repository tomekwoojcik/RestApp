import { FC } from "react";
import { leaveObjModel } from "../../context/userLeaveRequestContext";
import { Button, TableCell, TableRow } from "@mui/material";

interface propsModel {
  obj: leaveObjModel;
    request: boolean;
    handleRequest:(obj:leaveObjModel)=>void
}

const LeaveTableAwaitingAndRejectRow: FC<propsModel> = ({ obj, request, handleRequest }) => {
  return (
    <TableRow key={obj.leaveId}>
      <TableCell>{obj.startDateOfLeave}</TableCell>
      <TableCell>{obj.endDateOfLeave}</TableCell>
      <TableCell>{obj.kindLeave}</TableCell>
      <TableCell>{obj.holidayWorkerApprovalStatus}</TableCell>
      <TableCell>{obj.replacementPerson}</TableCell>
      <TableCell>{obj.supervisorApprovalStatus}</TableCell>
      <TableCell>{obj.supervisorComment}</TableCell>
      {request == true ? (
        <TableCell>
          <Button onClick={()=>{handleRequest(obj)}}>Request</Button>
        </TableCell>
      ) : null}
    </TableRow>
  );
};

export default LeaveTableAwaitingAndRejectRow;
