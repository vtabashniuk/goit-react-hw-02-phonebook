import React from "react";
import styles from "./Button.module.css";

const FormControl = ({ type, label, onClick, btnClass }) => {
  let btnClasses = [styles.button];
  if (btnClass) {
    btnClasses.push(styles[btnClass]);
  }
  return (
    <button type={type} onClick={onClick} className={btnClasses.join(' ')}>
      {label}
    </button>
  );
};
export default FormControl;
