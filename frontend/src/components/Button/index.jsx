import React from "react";
import { IconSvg } from "../IconSvg";
import styles from "./button.module.scss";

export const Button = ({
  text,
  disabled,
  withFrame,
  withoutFrame,
  blackButton,
  loginButton,
  bigButton,
  isIcons,
  color,
  loginBigButton,

  ...props
}) => {
  return (
    <div className={styles.wrapper}>
      <button
        disabled={disabled}
        className={`${styles.button}
       ${disabled && styles.buttonDisabled}
       ${withFrame && styles.withFrame}
       ${withoutFrame && styles.withoutFrame}
       ${blackButton && styles.blackButton}
       ${bigButton && styles.bigButton}
       ${loginButton && styles.loginButton}
       ${loginBigButton && styles.loginBigButton}
       `}
        {...props}
      >
        {text}
      </button>
      {isIcons && <IconSvg styles={styles} color={color} />}
    </div>
  );
};
