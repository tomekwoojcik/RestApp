import { FC } from "react";
import { leaveObjModel } from "../../context/userLeaveRequestContext";
import CancelLeaveButton from "../cancelLeaveButton/cancelLeaveButton";
import DetailsModel from "../../../interface/detailsInterface";
import { TableCell, TableRow } from "@mui/material";

interface propsModel {
  key: string;
  props: leaveObjModel | DetailsModel;
}

const UserLeaveRequestRow: FC<propsModel> = props => {
  return (
    <TableRow key={props.key}>
      <TableCell key={props.props.startDateOfLeave} >{props.props.startDateOfLeave}</TableCell>
      <TableCell key={props.props.endDateOfLeave} >{props.props.endDateOfLeave}</TableCell>
      <TableCell key={props.props.kindLeave}>{props.props.kindLeave}</TableCell>
      <TableCell  key={props.props.holidayWorkerApprovalStatus}>{props.props.holidayWorkerApprovalStatus}</TableCell>
      <TableCell key={props.props.replacementPerson}>{props.props.replacementPerson}</TableCell>
      <TableCell key={props.props.supervisorApprovalStatus}>{props.props.supervisorApprovalStatus}</TableCell>
      <TableCell key={props.props.supervisorComment}>{props.props.supervisorComment}</TableCell>
      <TableCell>
        <CancelLeaveButton props={props.props.leaveId} />
      </TableCell>
    </TableRow>
  );
};

export default UserLeaveRequestRow;
