import React from "react";
import styles from "./checkbox.module.css";

export const Checkbox = ({ text, checked, id }) => {
  return (
    <div>
      <input
        checked={checked}
        type="checkbox"
        className={styles.customCheckbox}
        id={id}
      />
      <label className={styles.checkboxLabel} for={id}>
        <span className={styles.text}>{text}</span>
      </label>
    </div>
  );
};
