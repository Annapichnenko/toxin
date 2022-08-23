import React from "react";
import styles from "./navigation.module.css";
export const Navigation = () => {
  return (
    <dl className={styles.navigation}>
      <dt className={styles.text}>О нас</dt>
      <dt className={styles.dt}>Услуги</dt>
      <dt className={styles.texts}>Вакансии</dt>
      <dt className={styles.title}>Новости</dt>
      <dt className={styles.dt1}>Соглашения</dt>
    </dl>
  );
};
