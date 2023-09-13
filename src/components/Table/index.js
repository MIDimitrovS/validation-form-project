import React from "react";
import TableRow from "./TableRow.js";
import styles from "./index.module.css";
import { useSelector } from "react-redux";

const HEADER_VALUES = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  message: "Message",
};
const Table = ({ ...props }) => {
  const data = useSelector((state) => state.users);
  return (
    <div className={styles.container} {...props}>
      <table>
        <thead>
          <TableRow tableCells={HEADER_VALUES} tag="th" isBodyRow={false} />
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
