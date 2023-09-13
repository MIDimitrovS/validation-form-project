import React from "react";
import styles from "./index.module.css";

const Button = ({ title, onClick, disabled, ...props }) => {
  return (
    <button
      className={disabled ? styles.disabled : styles.btn}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
