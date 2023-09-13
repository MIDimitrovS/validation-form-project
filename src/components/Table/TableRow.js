import React from "react";

const TableRow = ({
  tableCells,
  tag: Tag,
  isBodyRow = true,
  onDelete,
  ...props
}) => {
  const tableRowData = Object.values(tableCells);
  return (
    <tr {...props}>
      {tableRowData.map((value, index) => {
        console.log(`index ${index}`)
        return <Tag key={`index ${index}`}>{value}</Tag>;
      })}
    </tr>
  );
};
export default TableRow;
