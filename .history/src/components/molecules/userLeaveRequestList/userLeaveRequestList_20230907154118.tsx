import { FC, ReactNode, useContext } from "react";
import { UserLeaveRequestContext } from "../../context/userLeaveRequestContext";



interface leaveRequestModel {
    startDateOfLeave: string;
    endDateOfLeave: string;
    kindLeave: string;
    dateOfApplication: string;
    leaveId: string;
    personId: number;
    replacementPerson: string;
    supervisorApprovalStatus: null;
    supervisorComment: null;
}

const UserLeaveRequestList: FC = () => {
  const { state } = useContext(UserLeaveRequestContext);
  console.log(typeof state.leaveRequestDataArr);
    return 
    
};

export default UserLeaveRequestList;
