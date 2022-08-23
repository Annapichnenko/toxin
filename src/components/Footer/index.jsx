import React from "react";
import { Input } from "../Input";
import { Logotip } from "../Logotip";
import { SocialButton } from "../SocialButton";
import styles from "./footer.module.scss";

export const Footer = ({ withFooterBorder }) => {
  return (
    <div className={`${styles.wrapper} ${withFooterBorder && styles.border}`}>
      <div className={styles.header}>
        <div className={styles.footer}>
          <div className={styles.text1}>
            <div className={styles.logo}>
              <Logotip />
            </div>

            <div className={styles.textY}>
              <p className={styles.text}>
                Бронирование номеров в лучшем отеле 2019 года по версии
                ассоциации «Отельные взгляды»
              </p>
            </div>
          </div>

          <div className={styles.texts}>
            <div className={styles.text1}>
              <h4 className={styles.title}>Навигация</h4>
              <dl className={styles.foot}>
                <dt className={styles.dt}>О нас</dt>
                <dt className={styles.dt1}>Новости</dt>
                <dt className={styles.dt2}>Служба поддержки</dt>
                <dt className={styles.dt3}>Услуги</dt>
              </dl>
            </div>
            <div className={styles.text2}>
              <h4 className={styles.titleX}>О нас</h4>
              <dl className={styles.foot1}>
                <dt className={styles.dt4}>О сервисе</dt>
                <dt className={styles.dt5}>Наша команда</dt>
                <dt className={styles.dt6}>Вакансии</dt>
                <dt className={styles.dt7}>Инвесторы</dt>
              </dl>
            </div>
            <div className={styles.text3}>
              <h4 className={styles.titleB}>Служба поддержки</h4>
              <dl className={styles.foot2}>
                <dt className={styles.dt8}>Соглашения</dt>
                <dt className={styles.dt9}>Сообщества</dt>
                <dt className={styles.dt10}>Связь с нами</dt>
              </dl>
            </div>
            <div className={styles.text4}>
              <div className={styles.title1}>
                <h4 className={styles.titleD}>Подписка</h4>
                <p className={styles.title2}>
                  Получайте специальные предложения и новости сервиса
                </p>
              </div>

              <div className={styles.input}>
                <Input inputSubscribe isIcons={true} color="#BC9CFF" />
              </div>
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
