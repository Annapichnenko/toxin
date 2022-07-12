import React from "react";
import styles from "./button.module.css";

export const Button = ({
  text,
  disabled,
  withFrame,
  withoutFrame,
  blackButton,
  bigButton,
}) => {
  return (
    <button
      disabled={disabled}
      className={`${styles.button}
       ${disabled && styles.buttonDisabled}
       ${withFrame && styles.withFrame}
       ${withoutFrame && styles.withoutFrame}
       ${blackButton && styles.blackButton}
       ${bigButton && styles.bigButton}
       
       `}
    >
      {text}
    </button>
  );
};
