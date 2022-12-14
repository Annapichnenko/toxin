import React from "react";
import styles from "./logotip.module.scss";
import logo from "./logo.svg";
import toxin from "./toxin.svg";
import { useNavigate } from "react-router-dom";
export const Logotip = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div onClick={handleClick} className={styles.log}>
      <img src={logo} />

      <img className={styles.text} src={toxin} />
    </div>
  );
};
