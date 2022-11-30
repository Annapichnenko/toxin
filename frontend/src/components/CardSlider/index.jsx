import React from "react";
import { useNavigate } from "react-router-dom";
import { Carosel } from "../Carosel";
import { RateButton } from "../RateButton";
import styles from "./card.module.scss";

export const CardSlider = ({
  number,
  price,
  comments,
  isLux,
  rooms = [],
  id,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/roomdetails/${id}`);
  };
  return (
    <div className={styles.slider}>
      <Carosel>
        {rooms.map((el, i) => (
          <img onClick={handleClick} key={i} className={styles.img} src={el} />
        ))}
      </Carosel>
      <div className={styles.title}>
        <div className={styles.wrapper}>
          <div className={styles.title4}>
            <h4 className={styles.texts}>№</h4>
            <h4 className={styles.title1}>{number}</h4>

            <h4 className={styles.title2}>{isLux && "люкс"}</h4>
          </div>

          <div className={styles.span1}>
            <h4 className={styles.title3}>{price} </h4>
            <span className={styles.span}>в сутки</span>
          </div>
        </div>
      </div>
      <div className={styles.rate}>
        <div className={styles.rate1}>
          <RateButton id="star-1" value="1" />
        </div>
        <div className={styles.text2}>
          <h4 className={styles.text}>{comments} </h4>
          <span className={styles.span1}>Отзывов</span>
        </div>
      </div>
    </div>
  );
};
