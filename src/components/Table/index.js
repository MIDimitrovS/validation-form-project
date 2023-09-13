import React from "react";
import TableRow from "./TableRow.js";
import styles from "./index.module.css";

const Table = ({ data, headerValues, ...props }) => {
  return (
    <div className={styles.container} {...props}>
      <table>
        <thead>
          <TableRow tableCells={headerValues} tag="th" isBodyRow={false} />
        </thead>
        <tbody>
          {data?.map((rowData, index) => (
            <TableRow
              key={`row index ${index}`}
              tableCells={rowData}
              tag="td"
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
