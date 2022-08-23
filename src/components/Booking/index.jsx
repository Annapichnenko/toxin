import React from "react";
import { DateCalendar } from "../DateCalendar";
import { DropDown } from "../DropDown";
import icon from "./icon.svg";

import styles from "./booking.module.css";
import { Button } from "../Button";
export const Booking = () => {
  return (
    <div className={styles.book}>
      <div className={styles.title4}>
        <div className={styles.title3}>
          <span className={styles.span}>№</span>
          <h4 className={styles.title}>888</h4>
          <h4 className={styles.title1}>Люкс</h4>
        </div>
        <div>
          <div className={styles.bookek}>
            <h4 className={styles.title2}>9 990₽</h4>
            <h4 className={styles.texts}>в сутки</h4>
          </div>
        </div>
      </div>
      <div className={styles.part2}>
        <div className={styles.part}>
          <h4 className={styles.text}>Прибытие</h4>
          <DateCalendar />
        </div>
        <div className={styles.part1}>
          <h4 className={styles.text}>Выезд</h4>
          <DateCalendar />
        </div>
      </div>
      <div className={styles.down}>
        <h4 className={styles.part3}>Гости</h4>
        <div className={styles.drop}>
          <DropDown
            dropDownBig
            array={["взрослый", "взрослых", "взрослые"]}
            array1={["ребенок", "ребенка", "детей"]}
            array2={["младенец", "младенца", "младенцев"]}
            text1="взрослые"
            text2="дети"
            text3="младенцы"
            title="сколько гостей"
          />
        </div>
      </div>
      <div className={styles.booking1}>
        <div className={styles.parted}>
          <h4 className={styles.part4}>9 990₽ х 4 суток</h4>

          <h4 className={styles.parti}>39 960₽</h4>
        </div>
        <div className={styles.icon}>
          <h4 className={styles.middle}>Сбор за услуги: скидка 2 179₽</h4>
          <div className={styles.icon1}>
            <img src={icon} />
            <div className={styles.app}>
              <h4 className={styles.partes}>0₽</h4>
            </div>
          </div>
        </div>
        <div className={styles.icon2}>
          <h4 className={styles.part5}>Сбор за дополнительные </h4>
          <div className={styles.icon3}>
            <img className={styles.icons} src={icon} />
            <h4 className={styles.part6}>300₽</h4>
          </div>
        </div>
        <h4 className={styles.part8}>услуги</h4>
      </div>
      <div className={styles.book2}>
        <h4 className={styles.parts}>Итого</h4>
        <div className={styles.book1}> </div>
        <h4 className={styles.parte}>38 081₽</h4>
      </div>
      <div className={styles.button}>
        <Button
          text="Забронировать"
          bigButton={true}
          isIcons={true}
          color="white"
        />
      </div>
    </div>
  );
};
