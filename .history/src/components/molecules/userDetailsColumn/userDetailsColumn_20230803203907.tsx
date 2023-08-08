/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { FC } from 'react';
import UserDetailsRow from '../../atoms/userDetailsRow/userDetailsRow';

interface UserDetailsObjectInterface{
  columnName: string,
  data: object[]
}
const UserDetailsColumn: FC<UserDetailsObjectInterface> = (props) => {
  const { columnName, data} = props;
  return (
    <div>
      <h3>{columnName}</h3>
      <ul>
        {data.map((el:any) => <UserDetailsRow data={el} key={Math.random()} />)}
      </ul>

    </div>
  );
}

export default UserDetailsColumn;
