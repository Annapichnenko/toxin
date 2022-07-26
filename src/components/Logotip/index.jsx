import React from "react";
import styles from "./logotip.module.css";
import logo from "./logo.svg";
import toxin from "./toxin.svg";
export const Logotip = () => {
  return (
    <div className={styles.log}>
      <img src={logo} />

      <img src={toxin} />
    </div>
  );
};
