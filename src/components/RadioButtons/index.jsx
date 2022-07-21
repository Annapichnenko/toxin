import React from "react";

import styles from "./radioButton.module.css";
export const RadioButtons = ({ text, id, checked, name }) => {
  return (
    <div>
      <input
        className={styles.radioButton}
        type="radio"
        id={id}
        name={name}
        checked={checked}
      />
      <label className={styles.radioLabel} for={id}>
        {text}
      </label>
    </div>
  );
};
