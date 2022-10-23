import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { DateCalendar } from "../DateCalendar";
import { DropDown } from "../DropDown";
import { Input } from "../Input";
import styles from "./card.module.scss";
export const Card = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/rooms");
  };
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>Найдём номера под ваши пожелания </h4>
      <div className={styles.title2}>
        <div className={styles.title3}>
          <h4 className={styles.text}>Прибытие</h4>
          <DateCalendar />
        </div>
        <div className={styles.title4}>
          <h4 className={styles.text}>Выезд</h4>
          <DateCalendar />
        </div>
      </div>
      <div className={styles.input}>
        <h4 className={styles.text}>гости</h4>
        <div className={styles.drop}>
          <DropDown
            dropDownBig
            array={["взрослый", "взрослых", "взрослые"]}
            array1={["ребенок", "ребенка", "детей"]}
            array2={["младенец", "младенца", "младенцев"]}
            text1="взрослые"
            text2="дети"
            text3="младенцы"
            title="сколько гостей"
          />
        </div>
      </div>
      <div className={styles.button}>
        <Button
          text="Подобрать номер"
          bigButton={true}
          isIcons={true}
          color="white"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
