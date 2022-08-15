import React from "react";
import { useNavigate } from "react-router-dom";
import { Carosel } from "../Carosel";
import { RateButton } from "../RateButton";
import styles from "./card.module.css";
export const CardSlider = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/roomdetails");
  };
  return (
    <div onClick={handleClick} className={styles.slider}>
      <Carosel>
        <div className="item item-1"></div>
        <div className="item item-2"></div>
        <div className="item item-3"></div>
        <div className="item item-4"></div>
      </Carosel>
      <div className={styles.title}>
        <div className={styles.wrapper}>
          <div className={styles.title4}>
            <h4 className={styles.texts}>№</h4>
            <h4 className={styles.title1}>888</h4>

            <h4 className={styles.title2}>люкс</h4>
          </div>

          <div className={styles.span1}>
            <h4 className={styles.title3}>9 900₽ </h4>
            <span className={styles.span}>в сутки</span>
          </div>
        </div>
      </div>
      <div className={styles.rate}>
        <div className={styles.rate1}>
          <RateButton id="star-1" value="1" />
        </div>
        <div className={styles.text2}>
          <h4 className={styles.text}>145 </h4>
          <span className={styles.span1}>Отзывов</span>
        </div>
      </div>
    </div>
  );
};
