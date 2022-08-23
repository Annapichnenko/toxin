import styles from "./date.module.scss";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Input } from "../Input";

export const DateCalendar = ({ bigCalendar }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={`${styles.wrapper} ${bigCalendar && styles.bigCalendar}`}>
      <DatePicker
        className={`${styles.calendar} ${bigCalendar && styles.bigCalendar}`}
        placeholderText="ДД.ММ.ГГГГ"
        value={startDate}
        dateFormat="'MM/dd"
        onChange={(date) => setStartDate(date)}
      />
      <span className={styles.icon}></span>
    </div>
  );
};
