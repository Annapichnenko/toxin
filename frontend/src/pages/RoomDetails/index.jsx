import React from "react";
import { Comfort } from "../../components/Comfort";
import { Container } from "../../components/Container";
import { Rating } from "../../components/Rating";
import { MainLayout } from "../../layouts/MainLayout";
import styles from "./details.module.scss";
import comfort1 from "./insert_emoticon.svg";
import comfort2 from "./location_city.svg";
import comfort3 from "./whatshot.svg";
import { Booking } from "../../components/Booking";
import patrisia from "../../components/Comment/image 4.png";
import murad from "../../components/Comment/image.png";
import { Comment } from "../../components/Comment";
import { BulletList } from "../../components/BulletList";
import img1 from "./images.jpg";
import img2 from "./image1.jpg";
import img3 from "./image3.jpg";
import { dataBullet } from "../../mocks";

export const RoomDetails = () => {
  return (
    <MainLayout withFooterBorder>
      <div className={styles.wrapper}>
        <div className={styles.images}>
          <img src={img2} className={styles.photo} />
          <img src={img1} className={styles.photo} />
          <img src={img3} className={styles.photo} />
        </div>
        <Container>
          <div className={styles.container}>
            <div className={styles.content1}>
              <div className={styles.booking1}>
                <div className={styles.content}>
                  <div className={styles.comfort}>
                    <h4 className={styles.title}>Сведения о номере</h4>
                    <div className={styles.comfort4}>
                      <div className={styles.comfort1}>
                        <Comfort
                          title="Комфорт"
                          text="Шумопоглощающие стены"
                          image={comfort1}
                        />
                      </div>
                      <div className={styles.comfort2}>
                        <Comfort
                          title="Удобство"
                          text="Окно в каждой из спален"
                          image={comfort2}
                        />
                      </div>
                      <div className={styles.comfort3}>
                        <Comfort
                          title="Уют"
                          text="Номер оснащён камином"
                          image={comfort3}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.graph}>
                    <h4 className={styles.title1}>Впечатления от номера</h4>
                    <Rating />
                  </div>
                </div>
                <div className={styles.text3}>
                  <h4 className={styles.text}>Отзывы посетителей номера</h4>
                  <h4 className={styles.text1}>2 отзыва</h4>
                </div>

                <Comment
                  title="Мурад Сарафанов"
                  subtitle="5 дней назад"
                  text="Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей."
                  image={murad}
                  number={12}
                />
                <div className={styles.comments}>
                  <Comment
                    title="Патрисия Стёклышкова"
                    subtitle="Неделю назад"
                    text="Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент"
                    image={patrisia}
                    number={2}
                  />
                </div>
                <div className={styles.ul}>
                  <div className={styles.ul1}>
                    <h4 className={styles.li}>Правила</h4>

                    <BulletList data={dataBullet} />
                  </div>
                  <div className={styles.ul2}>
                    <h4 className={styles.text5}>Отмена</h4>
                    <h4 className={styles.text6}>
                      Бесплатная отмена в течение 48 ч. После этого при отмене
                      не позднее чем за 5 дн. до прибытия вы получите полный
                      возврат за вычетом сбора за услуги.
                    </h4>
                  </div>
                </div>
              </div>
              <div className={styles.bookes}>
                <Booking />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
};
