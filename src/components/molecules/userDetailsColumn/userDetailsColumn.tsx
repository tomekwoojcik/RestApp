/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import UserDetailsRow from '../../atoms/userDetailsRow/userDetailsRow';

interface UserDetailsObjectInterface{
  columnName: string,
  data: object[]
}
function UserDetailsColumn({ columnName, data }:UserDetailsObjectInterface) {
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
