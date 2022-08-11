import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Logotip } from "../Logotip";
import { Navigation } from "../Navigation";
import styles from "./header.module.css";
export const Header = ({ isLogin, isLogotip }) => {
  const navigate = useNavigate();
  const handleClickRec = () => {
    navigate("/registration");
  };
  const handleClick = () => {
    navigate("/signin");
  };
  return (
    <div className={styles.head}>
      <div className={styles.logo}>{isLogotip ? <Logotip /> : null}</div>
      <div className={styles.nav}>
        <Navigation />
      </div>
      {isLogin ? (
        <div className={styles.items}>
          <div className={styles.border}></div>
          <div className={styles.person}></div>
        </div>
      ) : (
        <div className={styles.buttons}>
          <Button text="Войти" onClick={handleClick} withFrame={true} />

          <Button
            text="Зарегистрироваться"
            onClick={handleClickRec}
            bigButton={true}
          ></Button>
        </div>
      )}
    </div>
  );
};
