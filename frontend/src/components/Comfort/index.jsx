import React from "react";
import styles from "./comfort.module.scss";

export const Comfort = ({ title, text, image }) => {
  return (
    <div className={styles.comfort}>
      <img className={styles.images} src={image} />
      <div className={styles.title}>
        <h4 className={styles.title1}>{title}</h4>
        <h4 className={styles.title2}>{text}</h4>
      </div>
    </div>
  );
};
