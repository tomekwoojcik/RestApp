import { FC } from 'react'

const LeavePlanTable : FC = () => {
    return (
        <table>
      <thead>
        <tr>
          <td>{"Start date leave."}</td>
          <td>{"End date leave."}</td>
          <td>{"Kind of leave."}</td>
          <td>{"Status leave."}</td>
          <td>{"Replacement person."}</td>
        </tr>
      </thead>
      <tbody>
        {state.leaveRequestDataArr.map((el: leaveObjModel) => (
          <UserLeaveRequestRow key={el.leaveId} props={el} />
        ))}
            </tbody>
            </table>
    )
}

export default LeavePlanTable