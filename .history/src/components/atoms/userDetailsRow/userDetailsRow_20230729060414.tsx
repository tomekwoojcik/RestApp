import { FC } from "react";

const UserDetailsRow: FC = (data: object) => {
  const { valueData }: any = data;
  return (
    <li>{valueData}</li>
  );
};

export default UserDetailsRow;