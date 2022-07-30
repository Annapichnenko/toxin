import React from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./card.module.css";
export const Card = () => {
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>Найдём номера под ваши пожелания </h4>
      <div className={styles.title2}>
        <div className={styles.title3}>
          <h4 className={styles.text}>Прибытие</h4>
          <Input placeholder="ДД.ММ.ГГГГ" color="#BC9CFF" />
        </div>
        <div className={styles.title4}>
          <h4 className={styles.text}>Выезд</h4>
          <Input placeholder="ДД.ММ.ГГГГ" color="#BC9CFF" />
        </div>
      </div>
      <div className={styles.input}>
        <h4 className={styles.text}>гости</h4>
        <Input placeholder="Имя" color="#BC9CFF" />
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
