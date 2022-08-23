import React, { useState } from "react";
import ReactSlider from "react-slider";
import styles from "./slider.module.css";
export const Slider = ({ title }) => {
  const [to, setTo] = useState(10000);
  const [from, setFrom] = useState(5000);
  const [value, setValue] = useState([from, to]);
  const handleChange = (value) => {
    const [from, to] = value;
    setFrom(from);
    setTo(to);
    setValue(value);
  };

  return (
    <>
      <div className={styles.slider2}>
        <div className={styles.span}>
          <h4 className={styles.title}>{title}</h4>
          <div className={styles.title1}>
            <span className={styles.slide}>{from}₽</span>
            <span>-</span>
            <span className={styles.slide1}>{to}₽</span>
          </div>
        </div>
        <ReactSlider
          lassName={styles.slider}
          thumbClassName={styles.thumb}
          trackClassName={styles.track}
          defaultValue={[0, 100]}
          value={value}
          onChange={handleChange}
          min={5000}
          max={10000}
        />
      </div>
    </>
  );
};
