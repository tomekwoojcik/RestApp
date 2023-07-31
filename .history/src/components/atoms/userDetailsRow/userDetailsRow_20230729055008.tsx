// eslint-disable-next-line react/prop-types
interface UserDetailsRowInterface{
  data: string
}
const UserDetailsRow = ({ data }:UserDetailsRowInterface) => {
  return (
    <li>{data}</li>
  );
}

export default UserDetailsRow;
