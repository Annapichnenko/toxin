import React, { useState } from "react";
import { CardSlider } from "../../components/CardSlider";
import { Carosel } from "../../components/Carosel";
import { Checkbox } from "../../components/Checkbox";
import { CheckboxList } from "../../components/CheckboxList";

import { Container } from "../../components/Container";
import { DateCalendar } from "../../components/DateCalendar";
import { DropDown } from "../../components/DropDown";
import { Pagination } from "../../components/Pagination/Pagination";
import { Slider } from "../../components/Slider";
import { MainLayout } from "../../layouts/MainLayout";
import styles from "./rooms.module.scss";
import room from "./image.jpg";
import room1 from "./image1.jpg";
import room2 from "./image2.jpg";
import room3 from "./image3.jpg";
import room4 from "./image4.jpg";
import room5 from "./image5.jpg";
import room6 from "./image6.jpg";
import room7 from "./image7.jpg";
import room8 from "./image8.jpg";
import room9 from "./image9.jpg";
import room10 from "./image10.jpg";
import room11 from "./image11.jpg";
export const Rooms = () => {
  const rooms = [room, room1, room2, room3];
  const rooms1 = [room1, room2, room3, room4];
  const rooms2 = [room2, room3, room4, room5];
  const rooms3 = [room3, room7, room8, room9];
  const rooms4 = [room4, room10, room11, room];
  const rooms5 = [room5, room7, room8, room9];
  const rooms6 = [room6, room7, room8, room9];
  const rooms7 = [room7, room7, room8, room9];
  const rooms8 = [room8, room7, room8, room9];
  const rooms9 = [room9, room7, room8, room9];
  const rooms10 = [room10, room7, room8, room9];
  const rooms11 = [room11, room7, room8, room9];
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

  const [filteredValues, setFilteredValues] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    current_values: [],
    totalPages: null,
    values: [],
    query: null,
  });

  const pageLimit = 3;
  const onPageChanged = ({
    currentPage,
    totalPages,
    pageLimit,
    filteredVal = filteredValues,
  }) => {
    let values = filteredVal;

    let offset = (currentPage - 1) * pageLimit;
    let current_values = values.slice(offset, offset + pageLimit);

    setPagination({
      ...pagination,
      currentPage: currentPage,
      current_values: current_values,
      totalPages: totalPages,
    });
  };
  return (
    <MainLayout withFooterBorder>
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.container}>
            <div className={styles.rommSlider}>
              <div className={styles.column}>
                <h4 className={styles.titleB}>даты пребывания в отеле</h4>
                <div className={styles.date}>
                  <DateCalendar bigCalendar />
                </div>
                <h4 className={styles.titleC}>гости</h4>
                <div className={styles.down}>
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
                <Slider title="диапазон цены" />
                <h4 className={styles.textC}>
                  Стоимость за сутки пребывания в номере
                </h4>
              </div>
              <h4 className={styles.titleD}>правила дома</h4>
              <Checkbox id="checkbox1" text="Можно курить" />
              <Checkbox
                id="checkbox2"
                text="Можно с питомцами"
                checked="checked"
              />
              <Checkbox
                id="checkbox3"
                checked="checked"
                text="Можно пригласить гостей (до 10 человек)"
              />

              <h4 className={styles.titleF}>доступность</h4>

              <div className={styles.checkboxes}>
                <div className={styles.checkbox}>
                  <Checkbox id="checkbox4" />
                </div>

                <div className={styles.textX}>
                  <h4 className={styles.titleX}>Широкий коридор</h4>
                  <h4 className={styles.titleY}>
                    Ширина коридоров в номере не менее 91 см.
                  </h4>
                </div>
              </div>

              <div className={styles.checkboxes}>
                <div className={styles.checkbox1}>
                  <Checkbox id="checkbox5" />
                </div>

                <div className={styles.textY}>
                  <h4 className={styles.titleX}>Помощник для инвалидов</h4>
                  <h4 className={styles.titleS}>
                    На 1 этаже вас встретит специалист и проводит до номера.
                  </h4>
                </div>
              </div>
              <h4 className={styles.textA}>удобства номера</h4>
              <DropDown
                text1="Спальни"
                text2="кровати"
                text3="ванные"
                title="2 спальни, 2 кровати..."
                array={["спальня", "спальни", "спален"]}
                array1={["кровать", "кровати", "кроватей"]}
                array2={["ванна", "ванны", "ванн"]}
              />
              <div className={styles.CheckboxList}>
                <CheckboxList data={data1} title="Дополнительные удобства" />
              </div>
            </div>

            <div className={styles.sliders}>
              <h4 className={styles.rooms}>
                Номера, которые мы для вас подобрали
              </h4>
              <div className={styles.cardSlider}>
                <CardSlider
                  rooms={rooms}
                  number={888}
                  price={"9 990₽"}
                  comments={145}
                  isLux={true}
                />
                <CardSlider
                  rooms={rooms1}
                  number={840}
                  price={"9 900₽"}
                  comments={65}
                />
                <CardSlider
                  rooms={rooms2}
                  number={980}
                  price={"8 500₽"}
                  comments={35}
                  isLux={true}
                />
                <CardSlider
                  rooms={rooms3}
                  number={856}
                  price={"7 300₽"}
                  comments={19}
                />
                <CardSlider
                  rooms={rooms4}
                  number={740}
                  price={"6 000₽"}
                  comments={44}
                />
                <CardSlider
                  rooms={rooms5}
                  number={982}
                  price={"5 800₽"}
                  comments={56}
                />
                <CardSlider
                  rooms={rooms6}
                  number={678}
                  price={"5 500₽"}
                  comments={45}
                />
                <CardSlider
                  rooms={rooms7}
                  number={450}
                  price={"5 300₽"}
                  comments={39}
                />
                <CardSlider
                  rooms={rooms8}
                  number={350}
                  price={"5 000₽"}
                  comments={77}
                />
                <CardSlider
                  rooms={rooms9}
                  number={666}
                  price={"5 000₽"}
                  comments={25}
                />
                <CardSlider
                  rooms={rooms10}
                  number={444}
                  price={"5 000₽"}
                  comments={15}
                />
                <CardSlider
                  rooms={rooms11}
                  number={352}
                  price={"5 000₽"}
                  comments={55}
                />
              </div>
              <div className={styles.pagination}>
                <Pagination
                  pageLimit={pageLimit}
                  totalRecords={filteredValues.length}
                  onPageChanged={onPageChanged}
                  pageNeighbours={1}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
};
