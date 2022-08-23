import React from "react";
import styles from "./rating.module.css";
import { Graph } from "../Graph";

export const Rating = () => {
  return (
    <div className={styles.graph}>
      <Graph />
      <div className={styles.rating}>
        <div className={styles.flex}>
          <div className={styles.radius}></div>
          <div className={styles.title}>Великолепно</div>
        </div>

        <div className={styles.flex}>
          <div className={styles.radiuses}></div>
          <div className={styles.title}>Хорошо</div>
        </div>
        <div className={styles.flex}>
          <div className={styles.radiusX}></div>
          <div className={styles.title}>Удовлетворительно</div>
        </div>

        <div className={styles.flex}>
          <div className={styles.radiusY}></div>
          <div className={styles.title}>Разочарован</div>
        </div>
      </div>
    </div>
  );
};
