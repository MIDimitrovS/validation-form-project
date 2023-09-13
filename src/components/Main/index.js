import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../Form";
import Table from "../Table";


const HEADER_VALUES = {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    message: "Message",
  };

const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);
  return (
    <>
      <Form dispatch={dispatch} />
      {data.length > 0 && <Table data={data} headerValues = {HEADER_VALUES}/>}
    </>
  );
};

export default Main;
