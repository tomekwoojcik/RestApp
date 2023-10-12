import { FC } from "react";
import { leaveObjModel } from "../../context/userLeaveRequestContext";
import CancelLeaveButton from "../cancelLeaveButton/cancelLeaveButton";
import DetailsModel from "../../../interface/detailsInterface";
import { TableCell, TableRow } from "@mui/material";
import { supervisorObj } from "../../molecules/leavePlanTable/leavePlanTable";
import SupervisorMenuForRowDetails from "../../molecules/supervisorMenuForRowDetails/supervisorMenuForRowDetails";

interface propsModel {
  props: leaveObjModel | DetailsModel;
  supervisorMenu: supervisorObj;
}

const UserLeaveRequestRow: FC<propsModel> = ({ props, supervisorMenu }) => {
  return (
    <TableRow>
      <TableCell>{props.startDateOfLeave}</TableCell>
      <TableCell>{props.endDateOfLeave}</TableCell>
      <TableCell>{props.kindLeave}</TableCell>
      <TableCell>{props.holidayWorkerApprovalStatus}</TableCell>
      <TableCell>{props.replacementPerson}</TableCell>
      <TableCell>{props.supervisorApprovalStatus}</TableCell>
      <TableCell>{props.supervisorComment}</TableCell>
      <TableCell>
        {supervisorMenu.text == "supervisorMenu" ? (
          <SupervisorMenuForRowDetails leaveId={props.leaveId} employeeId={props.personId} />
        ) : (
          <CancelLeaveButton props={props.leaveId} />
        )}
      </TableCell>
    </TableRow>
  );
};

export default UserLeaveRequestRow;
