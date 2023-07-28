// eslint-disable-next-line react/prop-types
interface UserDetailsRowInterface{
  data: string
}
function UserDetailsRow({ data }:UserDetailsRowInterface) {
  return (
    <li>{data}</li>
  );
}

export default UserDetailsRow;
