import styles from "./date.module.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Input } from "../Input";

export const DateCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={styles.wrapper}>
      <DatePicker
        className={styles.calendar}
        placeholderText="ДД.ММ.ГГГГ"
        value={startDate}
        dateFormat="'MM/dd"
        onChange={(date) => setStartDate(date)}
      />
      <span className={styles.icon}></span>
    </div>
  );
};
