import React from "react";
import styles from "./list.module.scss";
import { Checkbox } from "../Checkbox";
export const CheckboxList = ({ title, data }) => {
  return (
    <div>
      <details className={styles.details}>
        <summary className={styles.summary}>{title}</summary>
        <div className={styles.checkboxes}>
          {data.map((el) => (
            <Checkbox id={el.id} text={el.text} />
          ))}
        </div>
      </details>
    </div>
  );
};
