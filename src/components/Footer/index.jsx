import React from "react";
import { Input } from "../Input";
import { Logotip } from "../Logotip";
import { SocialButton } from "../SocialButton";
import styles from "./footer.module.css";

export const Footer = ({ withFooterBorder }) => {
  return (
    <div className={`${styles.wrapper} ${withFooterBorder && styles.border}`}>
      <div className={styles.header}>
        <div className={styles.footer}>
          <div className={styles.text1}>
            <div className={styles.logo}>
              <Logotip />
            </div>
            <p className={styles.text}>
              Бронирование номеров в лучшем отеле 2019 года по версии ассоциации
              «Отельные взгляды»
            </p>
          </div>
          <div className={styles.text2}>
            <h4 className={styles.title}>Навигация</h4>
            <dl className={styles.foot}>
              <dt className={styles.dt}>О нас</dt>
              <dt className={styles.dt1}>Новости</dt>
              <dt className={styles.dt2}>Служба поддержки</dt>
              <dt>Услуги</dt>
            </dl>
          </div>
          <div className={styles.text2}>
            <h4 className={styles.title}>О нас</h4>
            <dl className={styles.foot}>
              <dt className={styles.dt}>О сервисе</dt>
              <dt className={styles.dt1}>Наша команда</dt>
              <dt className={styles.dt2}>Вакансии</dt>
              <dt>Инвесторы</dt>
            </dl>
          </div>
          <div className={styles.text2}>
            <h4 className={styles.title}>Служба поддержки</h4>
            <dl className={styles.foot}>
              <dt className={styles.dt}>Соглашения</dt>
              <dt className={styles.dt1}>Сообщества</dt>
              <dt className={styles.dt2}>Связь с нами</dt>
            </dl>
          </div>
          <div className={styles.text2}>
            <div className={styles.title1}>
              <h4 className={styles.title}>Подписка</h4>
              <p className={styles.title2}>
                Получайте специальные предложения и новости сервиса
              </p>
            </div>
            <div className={styles.input}>
              <Input isIcons={true} color="#BC9CFF" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.title3}>
          Copyright © 2018 Toxin отель. Все права защищены.
        </p>

        <div className={styles.social}>
          <SocialButton />
        </div>
      </div>
    </div>
  );
};
