import React from "react";
import { IconSvg } from "../IconSvg";
import styles from "./input.module.scss";
export const Input = ({
  isIcons,
  color,
  placeholder = "Email",
  inputSubscribe,
  inputBig,
  value,
  onChange,
  ...props
}) => {
  return (
    <div className={styles.wrapper}>
      <input
        value={value}
        onChange={onChange}
        className={`${styles.input} ${
          inputSubscribe && styles.inputSubscribe
        } ${inputBig && styles.inputBig}`}
        placeholder={placeholder}
        {...props}
      />
      {isIcons && <IconSvg styles={styles} color={color} />}
    </div>
  );
};
