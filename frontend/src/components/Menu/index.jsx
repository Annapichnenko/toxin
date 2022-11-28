import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../pages/Test/66847.png";
import { Button } from "../Button";
import styles from "./menu.module.scss";
export const Menu = ({ header, items, active, setActive, userName }) => {
  const navigate = useNavigate();
  const handleClickRec = () => {
    navigate("/registration");
  };
  const handleClick = () => {
    navigate("/signin");
  };
  const handleOutClick = () => {
    localStorage.setItem("users", JSON.stringify({}));
    navigate("/signin");
    setActive(false);
  };
  return (
    <div
      className={active ? `${styles.menu} ${styles.active}` : `${styles.menu}`}
    >
      <div className={styles.menuContent}>
        <div className={styles.menuHeader}>
          {header}
          <img
            alt="Закрыть"
            onClick={() => setActive(!active)}
            width="40px"
            src={image}
          />
        </div>

        <ul className={styles.ul}>
          {items.map((item) => (
            <li className={styles.li}>
              <a href={item.href}>{item.value}</a>
            </li>
          ))}
        </ul>
        {userName ? (
          <div className={styles.login}>
            <div className={styles.person}>{userName}</div>
            <Button text="Выйти" onClick={handleOutClick} loginButton={true} />
          </div>
        ) : (
          <div className={styles.buttons}>
            <div className={styles.bigButton}>
              <Button text="Войти" onClick={handleClick} loginButton={true} />
            </div>

            <div className={styles.button}>
              <Button
                text="Зарегистрироваться"
                onClick={handleClickRec}
                loginBigButton={true}
              ></Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
