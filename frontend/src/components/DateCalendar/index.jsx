import styles from "./date.module.scss";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

export const DateCalendar = ({ bigCalendar }) => {
  const [startDate, setStartDate] = useState(null);
  return (
    <div className={`${styles.wrapper} ${bigCalendar && styles.bigCalendar}`}>
      <DatePicker
        className={`${styles.calendar} ${bigCalendar && styles.bigCalendar}`}
        placeholderText="ДД.ММ.ГГГГ"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <span className={styles.icon}></span>
    </div>
  );
};
