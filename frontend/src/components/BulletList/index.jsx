import React from "react";
import styles from "./bullet.module.scss";
export const BulletList = ({ data }) => {
  return (
    <div className={styles.bullet}>
      <ul className={styles.ul}>
        {data.map((el) => (
          <li className={styles.li}>{el.text}</li>
        ))}
      </ul>
    </div>
  );
};
