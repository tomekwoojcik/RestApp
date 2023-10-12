import { FC, useContext, useEffect, useState } from "react";
import LeavePlanContext from "../../context/leavePlanContext";
import MenuListLeavePlan from "../../molecules/menuListLeavePlan/menuListLeavePlan";
import { TableCell, TableRow } from "@mui/material";
import DetailsModel from "../../../interface/detailsInterface";
import { supervisorObj } from "../../molecules/leavePlanTable/leavePlanTable";
import SupervisorMenuForRowDetails from "../../molecules/supervisorMenuForRowDetails/supervisorMenuForRowDetails";
import uuid from "react-uuid";
export interface DestructDetailsModel {
  obj: DetailsModel;
  supervisorMenu: supervisorObj;
}

const LeavePlanDetailsRow: FC<DestructDetailsModel> = ({
  obj,
  supervisorMenu,
}) => {
  const [restStatus, setRestStatus] = useState<string>("after rest");
  const { dayFun } = useContext(LeavePlanContext);
  const [objLeave] = dayFun(obj.personId, obj.leaveId);

  useEffect(() => {
    if (objLeave?.howMuchTimeToStart < 0) {
      setRestStatus("during rest");
    } else if (objLeave?.howMuchTimeToStart > 0) {
      setRestStatus("before rest");
    }
  }, [objLeave?.howMuchTimeToStart]);
  return (
    <TableRow key={uuid()}>
      <TableCell key={uuid()}>{obj.startDateOfLeave}</TableCell>
      <TableCell key={uuid()}>{obj.endDateOfLeave}</TableCell>
      <TableCell key={uuid()}>{obj.kindLeave}</TableCell>
      <TableCell key={uuid()}>{obj.replacementPerson}</TableCell>
      <TableCell key={uuid()}>{objLeave?.subtractDay}</TableCell>
      <TableCell key={uuid()}>{objLeave?.howMuchTimeToStart}</TableCell>
      <TableCell key={uuid()}>{restStatus}</TableCell>
      <TableCell key={uuid()}>{obj.holidayWorkerApprovalStatus}</TableCell>
      <TableCell key={uuid()}>
        {
          supervisorMenu.text == "supervisorMenu"
          ? <SupervisorMenuForRowDetails />
         : <MenuListLeavePlan leaveId={obj.leaveId} />
        }
      </TableCell>
    </TableRow>
  );
};

export default LeavePlanDetailsRow;
