import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Input } from "../Input";
import { RadioButtons } from "../RadioButtons";
import { Toggle } from "../Toggle";
import styles from "./form.module.scss";
import eye from "../../images/eye.png";
import eye1 from "../../images/eye1.png";
export const RegistrationForm = () => {
  const [passwordType, setPasswordType] = useState("password");

  const [users, setUsers] = useState([]);
  const [create, setCreate] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setUsers(data);
      });
  }, [create]);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const [password, setPassword] = useState("");
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const [name, setName] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const [surname, setSurname] = useState("");
  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };
  const [date, setDate] = useState("");
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const [sex, setSex] = useState("");
  const handleSexChange = (event) => {
    console.log(sex);
    if (event.target.id === "radio-4") {
      setSex("male");
    } else if (event.target.id === "radio-3") {
      setSex("female");
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const validCount = 3;
    if (name.length < validCount) {
      alert(`Длина имени должна быть не менее ${validCount} символов`);
    } else if (surname.length < 3) {
      alert("Длина фамилии должна быть не менее 3 символов");
    } else if (email.length < 8) {
      alert("Длина email должна быть не менее 8 символов");
    } else if (password.length < 8) {
      alert("Длина пароля должна быть больше 8 символов");
    } else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert("Введите корректный email");
    } else if (users.find((user) => user.email === email)) {
      alert("user с таким email уже существует");
    } else {
      fetch("http://localhost:5000/api/registration", {
        method: "post",
        body: JSON.stringify({ email, password, name, surname }),
        headers: {
          "content-type": "application/json",
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          localStorage.setItem("users", JSON.stringify(data));
        });
      setCreate(true);
      navigate("/");
    }
  };
  const handleIconClick = () => {
    if (passwordType === "text") {
      setPasswordType("password");
    } else if (passwordType === "password") {
      setPasswordType("text");
    }
  };
  const handleClick = () => {
    navigate("/signin");
  };
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
