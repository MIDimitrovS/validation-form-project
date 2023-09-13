import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import validator from "validator";
import { addUser } from "../../ReduxStore/actions/addUsers";
import Input from "../Input";
import Button from "../Button";
import styles from "./index.module.css";

const Form = () => {
  const [properties, setProperties] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(addUser(properties));
    setProperties({ firstName: "", lastName: "", email: "", message: "" });
  };

  useEffect(() => {
    const validFields =
      !validator.isEmpty(properties.firstName) &&
      !validator.isEmpty(properties.lastName) &&
      !validator.isEmpty(properties.message) &&
      validator.isEmail(properties.email);

    validFields ? setIsDisabled(false) : setIsDisabled(true);
  }, [properties]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        type="text"
        id="first"
        name="firstName"
        placeHolder="First Name"
        label="First Name"
        onChange={(e) =>
          setProperties({ ...properties, firstName: e.target.value })
        }
        value={properties.firstName}
      />
      <Input
        type="text"
        id="last"
        name="lastName"
        placeHolder="Last Name"
        label="Last Name"
        onChange={(e) =>
          setProperties({ ...properties, lastName: e.target.value })
        }
        value={properties.lastName}
      />
      <Input
        type="email"
        id="email"
        name="email"
        placeHolder="Email"
        label="Email"
        onChange={(e) =>
          setProperties({ ...properties, email: e.target.value })
        }
        value={properties.email}
      />
      <Input
        type="text"
        id="message"
        name="message"
        placeHolder="Message"
        label="Message"
        onChange={(e) =>
          setProperties({ ...properties, message: e.target.value })
        }
        value={properties.message}
      />

      <Button title="Submit" type="submit" disabled={isDisabled} />
    </form>
  );
};

export default Form;
