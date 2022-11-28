import { getByTitle } from "@testing-library/react";
import React from "react";
import { LikeButton } from "../LikeButton";
import styles from "./comment.module.scss";

export const Comment = ({ title, subtitle, text, image, number }) => {
  return (
    <div>
      <div className={styles.items}>
        <img className={styles.image} src={image} />
        <div>
          <h4 className={styles.h4}>{title}</h4>
          <p className={styles.p}>{subtitle}</p>
        </div>
      </div>

      <div className={styles.like}>
        <LikeButton number={number} /> <p className={styles.title}>{text}</p>
      </div>
    </div>
  );
};
