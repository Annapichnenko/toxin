import { useState } from "react";

export const useDropDown = ({ title, array, array1, array2 }) => {
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

  return {
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
  };
};
