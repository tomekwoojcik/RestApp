import { FC } from "react";

const UserDetailsRow: FC = (data: object) => {
  const { valueData }: any = data;
  console.log(valueData);
  return (
    <li>{valueData}</li>
  );
};

export default UserDetailsRow;