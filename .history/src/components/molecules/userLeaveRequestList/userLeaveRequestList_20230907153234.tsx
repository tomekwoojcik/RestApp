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
        {state.leaveRequestDataArr.map((el:leaveRequestModel[]) => {
            <tr key={el.leaveId}>
                <td>{el.startDateOfLeave}</td>
                <td>{el.endDateOfLeave}</td>
                <td>{el.kindLeave}</td>
                <td>{el.replacementPerson}</td>
                <td>{el.supervisorApprovalStatus}</td>
            </tr>
        })
    </table>
};

export default UserLeaveRequestList;
