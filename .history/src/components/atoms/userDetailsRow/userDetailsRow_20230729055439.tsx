import { FC } from "react";

// eslint-disable-next-line react/prop-types
interface UserDetailsRowInterface{
  valueData: string
}
const UserDetailsRow: FC = (data: object) => {
  const {valueData}: UserDetailsRowInterface = data
  return (
    <li>{valueData}</li>
  );
}

export default UserDetailsRow;
