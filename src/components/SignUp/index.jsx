import React from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./sign.module.css";
export const SignUp = () => {
  return (
    <form className={styles.sign}>
      <h2 className={styles.title}>Войти</h2>
      <div className={styles.signUp}>
        <Input color="#BC9CFF" />
        <Input placeholder="Пароль" color="#BC9CFF" />
        <div className={styles.button}>
          <Button text="Войти" bigButton={true} isIcons={true} color="white" />
        </div>
      </div>

      <div className={styles.span}>
        <span className={styles.text}> Нет аккаунта на Toxin?</span>
        <div className={styles.button2}>
          <Button text="создать" withFrame={true} />
        </div>
      </div>
    </form>
  );
};
