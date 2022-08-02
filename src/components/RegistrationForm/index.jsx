import React from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { RadioButtons } from "../RadioButtons";
import { Toggle } from "../Toggle";
import styles from "./form.module.css";
export const RegistrationForm = () => {
  return (
    <div className={styles.form}>
      <div className={styles.reg}>Регистрация аккаунта</div>
      <div className={styles.input}>
        <Input placeholder="Имя" color="#BC9CFF" />
        <Input placeholder="Фамилия" color="#BC9CFF" />
      </div>
      <div className={styles.radio}>
        <RadioButtons name="male" id="radio-3" text="Мужчина" />
        <RadioButtons name="male" id="radio-4" text="Женщина" />
      </div>

      <h4 className={styles.label}> Дата рождения</h4>
      <div className={styles.inputs}>
        <Input placeholder="ДД.ММ.ГГГГ" color="#BC9CFF" />
      </div>

      <div className={styles.enter}>данные для входа в сервис</div>
      <div className={styles.input1}>
        <Input placeholder="Email" color="#BC9CFF" />
        <Input placeholder="Пароль" color="#BC9CFF" />
      </div>
      <div className={styles.toggle}>
        <Toggle text="Получать спецпредложения" />
      </div>
      <div className={styles.button1}>
        <Button
          text="Перейти к оплате"
          bigButton={true}
          isIcons={true}
          color="white"
        />
      </div>
      <div className={styles.title}>
        <div className={styles.toxin}>Уже есть аккаунт на Toxin</div>
        <div className={styles.button3}>
          <Button text="войти" withFrame={true} />
        </div>
      </div>
    </div>
  );
};
