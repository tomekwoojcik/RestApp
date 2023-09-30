import { FC } from "react";

interface propsModel {
  tableHeaders: string[];
}

const TableHeaders: FC<propsModel> = ({ tableHeaders }) => {
  return (
    <thead>
      <tr>
        {tableHeaders.map((el: string) => 
          <td key={el}>{el}</td>
        )}
      </tr>
    </thead>
  );
};

export default TableHeaders;
