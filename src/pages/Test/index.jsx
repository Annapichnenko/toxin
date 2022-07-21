import React from "react";
import { BulletList } from "../../components/BulletList";
import { Button } from "../../components/Button";
import { Checkbox } from "../../components/Checkbox";
import { CheckboxList } from "../../components/CheckboxList";
import { IconSvg } from "../../components/IconSvg";
import { Input } from "../../components/Input";
import { LikeButton } from "../../components/LikeButton";
import { RadioButtons } from "../../components/RadioButtons";
import { RateButton } from "../../components/RateButton";
import { Toggle } from "../../components/Toggle";
import "./styles.css";
export const Test = () => {
  const data = [
    {
      id: "list1",
      text: "Завтрак",
    },
    {
      id: "list2",
      text: "Стул кормления",
    },
    {
      id: "list3",
      text: "Кроватка",
    },
    {
      id: "list4",
      text: "Телевизор",
    },
    {
      id: "list5",
      text: "Шампунь",
    },
    {
      id: "list6",
      text: "Письменный стол",
    },
  ];
  const data1 = [
    {
      id: "list11",
      text: "Завтрак",
    },
    {
      id: "list12",
      text: "Стул кормления",
    },
    {
      id: "list13",
      text: "Кроватка",
    },
    {
      id: "list14",
      text: "Телевизор",
    },
    {
      id: "list15",
      text: "Шампунь",
    },
    {
      id: "list16",
      text: "Письменный стол",
    },
  ];
  const dataBullet = [
    {
      id: "list11",
      text: "Нельзя с питомцами",
    },
    {
      id: "list12",
      text: "Без вечеринок и мероприятий",
    },
    {
      id: "list13",
      text: "Время прибытия - после 13:00, а выезд до 12:00",
    },
  ];
  const dataBullet1 = [
    {
      id: "list11",
      text: "Завтрак",
    },
    {
      id: "list12",
      text: "Стул кормления",
    },
    {
      id: "list13",
      text: "Кроватка",
    },
    {
      id: "list14",
      text: "Телевизор",
    },
    {
      id: "list15",
      text: "Шампунь",
    },
    {
      id: "list16",
      text: "Письменный стол",
    },
  ];
  return (
    <div>
      <div className="button1">
        <div className="button2">
          <Button text="click me" />

          <Button text="click me" disabled={true} />
        </div>
        <div className="button3">
          <Button text="click me" withFrame={true} />
          <Button text="click me" withFrame={true} disabled={true} />
        </div>
        <div className="button4">
          <Button text="click me" withoutFrame={true} />
          <Button text="click me" blackButton={true} />
        </div>
      </div>
      <div className="button5">
        <Button
          text="Перейти к оплате"
          bigButton={true}
          isIcons={true}
          color="white"
        />
      </div>
      <div className="checkboxes">
        <Checkbox id="checkbox1" text="Можно курить" />
        <Checkbox id="checkbox2" text="Можно с питомцами" checked="checked" />
        <Checkbox
          id="checkbox3"
          checked="checked"
          text="Можно пригласить гостей (до 10 человек)"
        />
      </div>
      <div className="radio-buttons">
        <RadioButtons name="male" id="radio-1" text="Мужчина" />
        <RadioButtons name="male" id="radio-2" text="Женщина" />
      </div>
      <div className="inputs">
        <div className="input-group">
          <Input color="#BC9CFF" />
          <Input isIcons={true} color="#BC9CFF" />
        </div>
      </div>
      <div className="toggle">
        <Toggle text="Получать спецпредложения" />
        <Toggle text="Получать спецпредложения" />
      </div>
      <div className="likes">
        <LikeButton number={2} />
        <LikeButton number={12} />
      </div>
      <div className="rating">
        <RateButton id="star-1" value="1" />
        <RateButton id="star-2" value="2" />
      </div>
      <div className="list">
        <CheckboxList data={data} title="Список гостей" />
        <CheckboxList data={data1} title="Список продуктов" />
      </div>
      <div className="bullet">
        <BulletList data={dataBullet} />
        <BulletList data={dataBullet1} />
      </div>
    </div>
  );
};
