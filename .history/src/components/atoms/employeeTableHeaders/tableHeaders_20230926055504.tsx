import { FC } from "react";

interface propsModel {
  tableHeaders: string[];
}

const TableHeaders: FC<propsModel> = ({ tableHeaders }) => {
  return (
    <thead>
      <tr>
        {tableHeaders.map((el: string) => (
          <tr key={el}>{el}</tr>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeaders;
