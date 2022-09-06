import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Logotip } from "../Logotip";
import { Menu } from "../Menu";
import { Navigation } from "../Navigation";
import styles from "./header.module.scss";
export const Header = ({ isLogin, isLogotip }) => {
  const navigate = useNavigate();
  const handleClickRec = () => {
    console.log("handleClickRec");
    navigate("/registration");
  };
  const handleClick = () => {
    navigate("/signin");
  };
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "О нас" },
    { value: "Услуги" },
    { value: "Вакансии" },
    { value: "Новости" },
    { value: "Соглашения" },
  ];

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
          <Button text="Войти" onClick={handleClick} loginButton={true} />

          <Button
            text="Зарегистрироваться"
            onClick={handleClickRec}
            loginBigButton={true}
          ></Button>
        </div>
      )}
      <Menu
        active={menuActive}
        setActive={setMenuActive}
        header={<Logotip />}
        items={items}
      />
      <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
        <span />
      </div>
    </div>
  );
};
