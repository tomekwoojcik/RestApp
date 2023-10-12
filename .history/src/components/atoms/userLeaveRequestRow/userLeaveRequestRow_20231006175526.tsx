import { FC } from "react";
import { leaveObjModel } from "../../context/userLeaveRequestContext";
import CancelLeaveButton from "../cancelLeaveButton/cancelLeaveButton";
import DetailsModel from "../../../interface/detailsInterface";
import { TableCell, TableRow } from "@mui/material";
import uuid from "react-uuid";

interface propsModel {
  props: leaveObjModel | DetailsModel;
}

const UserLeaveRequestRow: FC<propsModel> = props => {
  return (
    <TableRow>
      <TableCell>{props.props.startDateOfLeave}</TableCell>
      <TableCell>{props.props.endDateOfLeave}</TableCell>
      <TableCell>{props.props.kindLeave}</TableCell>
      <TableCell>{props.props.holidayWorkerApprovalStatus}</TableCell>
      <TableCell>{props.props.replacementPerson}</TableCell>
      <TableCell>{props.props.supervisorApprovalStatus}</TableCell>
      <TableCell>{props.props.supervisorComment}</TableCell>
      <TableCell>
        <CancelLeaveButton props={props.props.leaveId} />
      </TableCell>
    </TableRow>
  );
};

export default UserLeaveRequestRow;
