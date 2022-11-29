import React from "react";
import { Button } from "../Button";
import styles from "./down.module.scss";
import { useDropDown } from "./hooks/useDropDown";
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
  const {
    count1,
    setCount1,
    setCount2,
    count2,
    isButtons,
    handleClickClear,
    handleClickApply,
    count,
    isOpen,
    setIsOpen,
    value,
    setCount,
  } = useDropDown({ title, array, array1, array2 });
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
