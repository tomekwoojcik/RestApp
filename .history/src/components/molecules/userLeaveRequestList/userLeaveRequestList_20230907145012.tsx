import { FC, useContext } from "react";
import { UserLeaveRequestContext } from "../../context/userLeaveRequestContext";

interface leaveRequestModel {
    dateOfApplication:string,
endDateOfLeave:string,
holidayWorkerApprovalStatus:string,
"planned"
kindLeave
: 
"Unpaid Leave"
leaveId
: 
"kAIE-xvCri"
personId
: 
1
replacementPerson
: 
"John Brzezinski"
startDateOfLeave
: 
"2023-09-12T03:58:31.000Z"
supervisorApprovalStatus
: 
null
supervisorComment
: 
null
}

const UserLeaveRequestList: FC = () => {
  const { state } = useContext(UserLeaveRequestContext);
  console.log(state.leaveRequestDataArr);
    return state.leaveRequestDataArr.map((el: leaveRequestModel) => {
        console.log(el);
  });
};

export default UserLeaveRequestList;
