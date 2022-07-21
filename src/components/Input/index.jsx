import React from "react";
import { IconSvg } from "../IconSvg";
import styles from "./input.module.css";
export const Input = ({ isIcons, color }) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} placeholder="Email" />
      {isIcons && <IconSvg styles={styles} color={color} />}
    </div>
  );
};
