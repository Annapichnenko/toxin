import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./sign.module.scss";
import eye from "../../images/eye.png";
import eye1 from "../../images/eye1.png";
export const SignUp = () => {
  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();
  const handleClickRec = () => {
    navigate("/registration");
  };
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      fetch("http://localhost:5000/api/login", {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: {
          "content-type": "application/json",
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data.message) {
            alert(data.message);
          } else {
            localStorage.setItem("users", JSON.stringify(data));
            navigate("/");
          }
        });
    } else {
      alert("Введите корректный email");
    }
  };
  const handleIconClick = () => {
    if (passwordType === "text") {
      setPasswordType("password");
    } else if (passwordType === "password") {
      setPasswordType("text");
    }
  };
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
