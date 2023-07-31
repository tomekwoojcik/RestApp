import { FC } from "react";

// eslint-disable-next-line react/prop-types
interface UserDetailsRowInterface{
  valueData: string
}
const UserDetailsRow: FC = (data: {valueData:string}) => {
  return (
    <li>{data.valueData}</li>
  );
}

export default UserDetailsRow;
