import React from "react";
import styles from "./rate.module.scss";

export const RateButton = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const id1 = getRandomInt(169);
  const id2 = getRandomInt(188);
  const id3 = getRandomInt(199);
  const id4 = getRandomInt(128);
  const id5 = getRandomInt(176);
  return (
    <>
      <div className={styles.stars}>
        <input
          className={styles.input}
          type="radio"
          id={id1}
          name="rating"
          value="1"
        />
        <input
          className={styles.input}
          type="radio"
          id={id2}
          name="rating"
          value="2"
        />
        <input
          className={styles.input}
          type="radio"
          id={id3}
          name="rating"
          value="3"
        />
        <input
          className={styles.input}
          type="radio"
          id={id4}
          name="rating"
          value="4"
        />
        <input
          className={styles.input}
          type="radio"
          id={id5}
          name="rating"
          value="5"
        />

        <label className={styles.label} for={id1}>
          1 star
        </label>
        <label className={styles.label} for={id2}>
          2 stars
        </label>
        <label className={styles.label} for={id3}>
          3 stars
        </label>
        <label className={styles.label} for={id4}>
          4 stars
        </label>
        <label className={styles.label} for={id5}>
          5 stars
        </label>
      </div>
    </>
  );
};
