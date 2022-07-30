import React from "react";
import styles from "./down.module.css";
export const DropDown = () => {
  return (
    <div className={styles.down}>
      <div className={styles.items}>
        <span className={styles.title}>Спальни</span>
        <div>
          <span className={styles.minus}>-</span>
          <span className={styles.number}>2</span>
          <span className={styles.plus}>+</span>
        </div>
      </div>

      <div className={styles.items}>
        <span className={styles.title}>Кровати</span>
        <div>
          <span className={styles.minus}>-</span>
          <span className={styles.number}>2</span>
          <span className={styles.plus}>+</span>
        </div>
      </div>

      <div className={styles.items}>
        <span className={styles.title}>Ванные комнаты</span>
        <div>
          <span className={styles.minus}>-</span>
          <span className={styles.number}>0</span>
          <span className={styles.plus}>+</span>
        </div>
      </div>
    </div>
  );
};
