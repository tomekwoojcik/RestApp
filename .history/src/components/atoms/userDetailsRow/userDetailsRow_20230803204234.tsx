import { FC } from "react";

const UserDetailsRow: FC<{data:object}> = (props) => {
  const { data } = props;
  return (
    <li>{data.toString()}</li>
  );
};

export default UserDetailsRow;