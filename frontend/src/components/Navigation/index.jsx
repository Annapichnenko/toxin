import React from "react";
import styles from "./navigation.module.scss";
export const Navigation = () => {
  return (
    <dl className={styles.navigation}>
      <dt className={styles.text}>
        <a className={styles.link} href="https://www.metalamp.ru/">
          О нас
        </a>
      </dt>
      <dt className={styles.dt}>
        {" "}
        <a
          className={styles.link}
          href="https://www.metalamp.ru/mvp-development"
        >
          Услуги{" "}
        </a>
      </dt>
      <dt className={styles.texts}>
        {" "}
        <a className={styles.link} href="https://www.metalamp.ru/haskell">
          Вакансии{" "}
        </a>
      </dt>
      <dt className={styles.title}>
        {" "}
        <a className={styles.link} href="https://www.metalamp.ru/education">
          Новости{" "}
        </a>
      </dt>
      <dt className={styles.dt1}>
        {" "}
        <a className={styles.link} href="https://www.metalamp.ru/cases">
          Соглашения{" "}
        </a>
      </dt>
    </dl>
  );
};
