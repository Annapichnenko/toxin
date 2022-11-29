import React from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./sign.module.scss";
import eye from "../../images/eye.png";
import eye1 from "../../images/eye1.png";
import { useControllerForm } from "./hooks/useControllerForm";
export const SignUp = () => {
  const {
    handleFormSubmit,
    email,
    handleEmailChange,
    password,
    handlePasswordChange,
    passwordType,
    handleIconClick,
    handleClickRec,
  } = useControllerForm();
  return (
    <form onSubmit={handleFormSubmit} className={styles.sign}>
      <h2 className={styles.title}>Войти</h2>
      <div className={styles.signUp}>
        <Input
          value={email}
          onChange={handleEmailChange}
          inputBig
          color="#BC9CFF"
          name="email"
        />
        <div className={styles.password}>
          <Input
            placeholder="Пароль"
            value={password}
            onChange={handlePasswordChange}
            name="password"
            color="#BC9CFF"
            type={passwordType}
            inputBig
          />
          {passwordType === "password" ? (
            <img
              className={styles.icon}
              width={30}
              onClick={handleIconClick}
              src={eye1}
            />
          ) : (
            <img
              className={styles.icon}
              width={30}
              onClick={handleIconClick}
              src={eye}
            />
          )}
        </div>
        <div className={styles.button}>
          <Button
            type="submit"
            text="Войти"
            bigButton={true}
            isIcons={true}
            color="white"
          />
        </div>
      </div>

      <div className={styles.span}>
        <span className={styles.text}> Нет аккаунта на Toxin?</span>
        <div className={styles.button2}>
          <Button text="создать" onClick={handleClickRec} withFrame={true} />
        </div>
      </div>
    </form>
  );
};
