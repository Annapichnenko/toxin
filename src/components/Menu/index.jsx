import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../pages/Test/66847.png";
import { Button } from "../Button";
import styles from "./menu.module.scss";
export const Menu = ({ header, items, active, setActive }) => {
  const navigate = useNavigate();
  const handleClickRec = () => {
    navigate("/registration");
  };
  const handleClick = () => {
    navigate("/signin");
  };
  return (
    <div className={active ? "menu active" : "menu"}>
      <div className="menu__content">
        <div className="menu__header">
          {header}
          <img onClick={() => setActive(!active)} width="40px" src={image} />
        </div>

        <ul>
          {items.map((item) => (
            <li>
              <a href={item.href}>{item.value}</a>
            </li>
          ))}
        </ul>
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
      </div>
    </div>
  );
};
