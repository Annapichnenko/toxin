import React from "react";

import styles from "./toggle.module.css";
export const Toggle = ({ id, text }) => {
  return (
    <label className={styles.toggleButtonCover}>
      <div className={styles.buttonCover}>
        <input type="checkbox" className={styles.checkbox} />
        <div className={styles.button}></div>
      </div>
      <span className={styles.toggleText}>{text}</span>
    </label>
  );
};
