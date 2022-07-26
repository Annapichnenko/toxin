import React from "react";
import styles from "./navigation.module.css";
export const Navigation = () => {
  return (
    <dl className={styles.navigation}>
      <dt>О нас</dt>
      <dt className={styles.dt}>Услуги</dt>
      <dt>Вакансии</dt>
      <dt>Новости</dt>
      <dt className={styles.dt1}>Соглашения</dt>
    </dl>
  );
};
