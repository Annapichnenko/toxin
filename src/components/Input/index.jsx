import React from "react";
import { IconSvg } from "../IconSvg";
import styles from "./input.module.css";
export const Input = ({
  isIcons,
  color,
  placeholder = "Email",
  inputSubscribe,
  inputBig,
}) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={`${styles.input} ${
          inputSubscribe && styles.inputSubscribe
        } ${inputBig && styles.inputBig}`}
        placeholder={placeholder}
      />
      {isIcons && <IconSvg styles={styles} color={color} />}
    </div>
  );
};
