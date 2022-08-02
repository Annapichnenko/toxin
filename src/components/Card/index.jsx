import React from "react";
import { Button } from "../Button";
import { DateCalendar } from "../DateCalendar";
import { DropDown } from "../DropDown";
import { Input } from "../Input";
import styles from "./card.module.css";
export const Card = () => {
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
      <h4 className={styles.part3}>Гости</h4>

      <div className={styles.drop}>
        <DropDown
          array={["взрослый", "взрослых", "взрослые"]}
          array1={["ребенок", "ребенка", "детей"]}
          array2={["младенец", "младенца", "младенцев"]}
          text1="взрослые"
          text2="дети"
          text3="младенцы"
          title="сколько гостей"
        />
      </div>
      <div className={styles.button}>
        <Button
          text="Подобрать номер"
          bigButton={true}
          isIcons={true}
          color="white"
        />
      </div>
    </div>
  );
};
