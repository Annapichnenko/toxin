import React from "react";
import { BulletList } from "../../components/BulletList";
import { Button } from "../../components/Button";
import { Checkbox } from "../../components/Checkbox";
import { CheckboxList } from "../../components/CheckboxList";
import { Comment } from "../../components/Comment";
import { IconSvg } from "../../components/IconSvg";
import { Input } from "../../components/Input";
import { LikeButton } from "../../components/LikeButton";
import { RadioButtons } from "../../components/RadioButtons";
import { RateButton } from "../../components/RateButton";
import { Toggle } from "../../components/Toggle";
import "./styles.css";
import patrisia from "../../components/Comment/image 4.png";
import murad from "../../components/Comment/image.png";
import { Navigation } from "../../components/Navigation";
import { Logotip } from "../../components/Logotip";
import { Header } from "../../components/Header";
import { SignUp } from "../../components/SignUp";
import { SocialButton } from "../../components/SocialButton";
import { Footer } from "../../components/Footer";
import { FooterMobile } from "../../components/FooterMobile";
import { RegistrationForm } from "../../components/RegistrationForm";
import { Comfort } from "../../components/Comfort";
import comfort1 from "../../components/Comfort/emoticon.svg";
import comfort2 from "../../components/Comfort/location_city.svg";
import { Card } from "../../components/Card";
import { DateCalendar } from "../../components/DateCalendar";
import { DropDown } from "../../components/DropDown";
import { Slider } from "../../components/Slider";
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
      <div className="comment">
        <Comment
          title="Мурад Сарафанов"
          subtitle="5 дней назад"
          text="Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей."
          image={murad}
          number={12}
        />
      </div>
      <div className="comment">
        <Comment
          title="Патрисия Стёклышкова"
          subtitle="Неделю назад"
          text="Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент"
          image={patrisia}
          number={2}
        />
      </div>
      <div className="nav">
        <Navigation />
      </div>
      <div className="logo">
        <Logotip />
      </div>

      <div className="head">
        <Header isLogin={true} isLogotip name="Try" />
        <Header isLogin={false} isNavigation name="Redy" />
      </div>
      <div className="sign">
        <SignUp />
      </div>
      <div className="social">
        <SocialButton />
      </div>
      <div className="footer">
        <Footer />
      </div>
      <div className="mobile">
        <FooterMobile />
      </div>
      <div className="form">
        <RegistrationForm />
      </div>
      <div className="comfort">
        <Comfort
          title="Комфорт"
          text="Шумопоглощающие стены"
          image={comfort1}
        />
        <Comfort
          title="Удобство"
          text="Окно в каждой из спален"
          image={comfort2}
        />
      </div>
      <div className="card">
        <Card />
      </div>
      <div className="date">
        <DateCalendar />
      </div>
      <div className="down">
        <DropDown
          text1="Спальни"
          text2="кровати"
          text3="ванные"
          title="2 спальни, 2 кровати..."
          array={["спальня", "спальни", "спален"]}
          array1={["кровать", "кровати", "кроватей"]}
          array2={["ванна", "ванны", "ванн"]}
        />
        <DropDown
          array={["взрослый", "взрослых", "взрослые"]}
          array1={["ребенок", "ребенка", "детей"]}
          array2={["младенец", "младенца", "младенцев"]}
          text1="взрослые"
          text2="дети"
          text3="младенцы"
          title="сколько гостей"
        />
      </div>
      <div className="sliders">
        <Slider title="range-slider" />
        <Slider title="диапазон цены" />
      </div>
    </div>
  );
};
