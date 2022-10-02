import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const {label} = props
  return <button className={styles.button4}>{label}</button>;
};

export default Button;
