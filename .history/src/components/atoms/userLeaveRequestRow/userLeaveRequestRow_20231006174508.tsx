import { FC } from "react";
import { leaveObjModel } from "../../context/userLeaveRequestContext";
import CancelLeaveButton from "../cancelLeaveButton/cancelLeaveButton";
import DetailsModel from "../../../interface/detailsInterface";
import { TableCell, TableRow } from "@mui/material";
import uuid from "react-uuid";

interface propsModel {
  uniqKey: string;
  props: leaveObjModel | DetailsModel;
}

const UserLeaveRequestRow: FC<propsModel> = props => {
  return (
    <TableRow key={uuid()}>
      <TableCell key={uuid()}>{props.props.startDateOfLeave}</TableCell>
      <TableCell key={uuid()}>{props.props.endDateOfLeave}</TableCell>
      <TableCell key={uuid()}>{props.props.kindLeave}</TableCell>
      <TableCell key={uuid()}>{props.props.holidayWorkerApprovalStatus}</TableCell>
      <TableCell key={uuid()}>{props.props.replacementPerson}</TableCell>
      <TableCell key={uuid()}>{props.props.supervisorApprovalStatus}</TableCell>
      <TableCell key={uuid()}>{props.props.supervisorComment}</TableCell>
      <TableCell key={uuid()}>
        <CancelLeaveButton props={props.props.leaveId} />
      </TableCell>
    </TableRow>
  );
};

export default UserLeaveRequestRow;
