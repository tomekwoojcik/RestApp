import { FC } from "react";

// eslint-disable-next-line react/prop-types
interface UserDetailsRowInterface{
  valueData: string
}
const UserDetailsRow: FC = (data: object) => {
  return (
    <li>{data.valueData}</li>
  );
}

export default UserDetailsRow;
