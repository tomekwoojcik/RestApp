import { FC, useContext } from "react";
import { UserLeaveRequestContext } from "../../context/userLeaveRequestContext";

interface leaveRequestModel {
  dateOfApplication: string;
  endDateOfLeave: string;
  holidayWorkerApprovalStatus: string;
  planned:string
  kindLeave:string
  leaveId: string,
  personId: number,
  replacementPerson: string,
  startDateOfLeave: string,
  supervisorApprovalStatus: null;
  supervisorComment: null;
}

const UserLeaveRequestList: FC = () => {
  const { state } = useContext(UserLeaveRequestContext);
  console.log(state.leaveRequestDataArr);
    return <table>
        {state.leaveRequestDataArr.map((el:leaveRequestModel) => {
            <tr key={el.leaveId}>
                <td>{el.leaveId}</td>
                <td>{el.}</td>
            </tr>
        })
    </table>
};

export default UserLeaveRequestList;