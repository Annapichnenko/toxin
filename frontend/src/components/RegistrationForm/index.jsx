import React, { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { RadioButtons } from "../RadioButtons";
import { Toggle } from "../Toggle";
import styles from "./form.module.scss";
import eye from "../../images/eye.png";
import eye1 from "../../images/eye1.png";
import { useGetUsers } from "./hooks/useGetUsers";
import { useControllerForm } from "./hooks/useControllerForm";
export const RegistrationForm = () => {
  const [create, setCreate] = useState(false);
  const { users } = useGetUsers({ create });

  const {
    handleEmailChange,
    handlePasswordChange,
    handleNameChange,
    handleSurnameChange,
    handleDateChange,
    handleSexChange,
    handleFormSubmit,
    handleIconClick,
    handleClick,
    date,
    email,
    password,
    surname,
    passwordType,
    name,
  } = useControllerForm({ setCreate, users });

  return (
    <form onSubmit={handleFormSubmit} className={styles.form}>
      <div className={styles.reg}>Регистрация аккаунта</div>
      <div className={styles.input}>
        <Input
          value={name}
          onChange={handleNameChange}
          name="name"
          placeholder="Имя"
          color="#BC9CFF"
        />
        <Input
          value={surname}
          onChange={handleSurnameChange}
          name="surname"
          placeholder="Фамилия"
          color="#BC9CFF"
        />
      </div>
      <div className={styles.radio}>
        <RadioButtons
          onChange={handleSexChange}
          name="male"
          id="radio-3"
          text="Мужчина"
        />
        <RadioButtons
          onChange={handleSexChange}
          name="male"
          id="radio-4"
          text="Женщина"
        />
      </div>

      <h4 className={styles.label}> Дата рождения</h4>
      <Input
        value={date}
        onChange={handleDateChange}
        name="date"
        type="date"
        placeholder="ДД.ММ.ГГГГ"
        color="#BC9CFF"
      />

      <div className={styles.enter}>данные для входа в сервис</div>
      <div className={styles.input1}>
        <Input
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          name="email"
          color="#BC9CFF"
        />
        <div className={styles.password}>
          <Input
            placeholder="Пароль"
            value={password}
            onChange={handlePasswordChange}
            name="password"
            color="#BC9CFF"
            type={passwordType}
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
      </div>
      <div className={styles.toggle}>
        <Toggle text="Получать спецпредложения" />
      </div>
      <div className={styles.button1}>
        <Button
          text="зарегистрироваться"
          bigButton={true}
          isIcons={true}
          color="white"
          type="submit"
        />
      </div>
      <div className={styles.title}>
        <div className={styles.toxin}>Уже есть аккаунт на Toxin</div>
        <div className={styles.button3}>
          <Button text="войти" onClick={handleClick} withFrame={true} />
        </div>
      </div>
    </form>
  );
};
