import React from "react";

import styles from "./radioButton.module.scss";
export const RadioButtons = ({ text, id, checked, name, ...props }) => {
  return (
    <div>
      <input
        className={styles.radioButton}
        type="radio"
        id={id}
        name={name}
        checked={checked}
        {...props}
      />
      <label className={styles.radioLabel} for={id}>
        {text}
      </label>
    </div>
  );
};
