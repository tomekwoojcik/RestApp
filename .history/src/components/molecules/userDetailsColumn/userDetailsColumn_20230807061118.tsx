import { FC } from "react";
import UserDetailsRow from "../../atoms/userDetailsRow/userDetailsRow";

interface UserDetailsObjectModel {
  columnName: string;
  data: object[];
}
const UserDetailsColumn: FC<UserDetailsObjectModel> = props => {
  const { columnName, data } = props;
  return (
    <div>
      <h3>{columnName}</h3>
      <ul>
        {data.map((el: any) => (
          <UserDetailsRow data={el} key={Math.random()} />
        ))}
      </ul>
    </div>
  );
};

export default UserDetailsColumn;
