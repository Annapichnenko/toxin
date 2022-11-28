import React, { useState } from "react";
import { Button } from "../Button";
import styles from "./down.module.scss";
export const DropDown = ({
  text1,
  text2,
  text3,
  title,
  array,
  array1,
  array2,
  dropDownBig,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(2);
  const [count2, setCount2] = useState(2);
  const [isButtons, setIsButtons] = useState(true);
  const [value, setValue] = useState(title);

  function declOfNum(n, text_forms) {
    n = Math.abs(n) % 100;
    var n1 = n % 10;
    if (n > 10 && n < 20) {
      return text_forms[2];
    }
    if (n1 > 1 && n1 < 5) {
      return text_forms[1];
    }
    if (n1 == 1) {
      return text_forms[0];
    }
    return text_forms[2];
  }

  const handleClickApply = () => {
    setIsOpen(!isOpen);
    let result = `${count} ${declOfNum(count, array)}, ${count1} ${declOfNum(
      count1,
      array1
    )}, ${count2} ${declOfNum(count2, array2)} `;
    if (count === 0) {
      result = ` ${count1} ${declOfNum(count1, array1)}, ${count2} ${declOfNum(
        count2,
        array2
      )} `;
    }
    if (count1 === 0) {
      result = `${count} ${declOfNum(count, array)},  ${count2} ${declOfNum(
        count2,
        array2
      )} `;
    }
    if (count2 === 0) {
      result = `${count} ${declOfNum(count, array)}, ${count1} ${declOfNum(
        count1,
        array1
      )}`;
    }
    if (count === 0 && count1 === 0 && count2 === 0) {
      result = "Выберите варианты";
    }
    if (count !== 0 && count1 === 0 && count2 === 0) {
      result = `${count} ${declOfNum(count, array)}`;
    }
    if (count1 !== 0 && count === 0 && count2 === 0) {
      result = `${count1} ${declOfNum(count1, array1)}`;
    }
    if (count2 !== 0 && count === 0 && count1 === 0) {
      result = `${count2} ${declOfNum(count2, array2)}`;
    }
    setValue(result);
  };

  const handleClickClear = () => {
    setCount(0);
    setCount1(0);
    setCount2(0);
  };
  return (
    <div className={`${styles.input} ${dropDownBig && styles.dropDownBig}`}>
      <span className={styles.icon} onClick={() => setIsOpen(!isOpen)}></span>
      <input
        value={value}
        className={`${styles.date} ${dropDownBig && styles.dropDownBig}`}
      />

      {isOpen ? (
        <div
          className={`${styles.down} ${isButtons && styles.height}  ${
            dropDownBig && styles.dropDownBig
          }`}
        >
          <div className={styles.items}>
            <span className={styles.title}>{text1}</span>
            <div>
              <span
                className={styles.minus}
                onClick={() => setCount(count === 0 ? count : count - 1)}
              >
                -
              </span>
              <input className={styles.number} value={count} />
              <span className={styles.plus} onClick={() => setCount(count + 1)}>
                +
              </span>
            </div>
          </div>

          <div className={styles.items}>
            <span className={styles.title}>{text2}</span>
            <div>
              <span
                className={styles.minus}
                onClick={() => setCount1(count1 === 0 ? count1 : count1 - 1)}
              >
                -
              </span>
              <input className={styles.number} value={count1} />
              <span
                className={styles.plus}
                onClick={() => setCount1(count1 + 1)}
              >
                +
              </span>
            </div>
          </div>

          <div className={styles.items}>
            <span className={styles.title}>{text3}</span>
            <div>
              <span
                className={styles.minus}
                onClick={() => setCount2(count2 === 0 ? count2 : count2 - 1)}
              >
                -
              </span>
              <input className={styles.number} value={count2} />
              <span
                className={styles.plus}
                onClick={() => setCount2(count2 + 1)}
              >
                +
              </span>
            </div>
          </div>
          {isButtons ? (
            <div className={styles.button}>
              <Button
                text="очистить"
                onClick={() => handleClickClear()}
                withoutFrame={true}
              />

              <Button
                text="применить"
                onClick={() => handleClickApply()}
                withoutFrame={true}
              />
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
