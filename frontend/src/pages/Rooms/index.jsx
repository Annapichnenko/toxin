import React from "react";
import { CardSlider } from "../../components/CardSlider";
import { Checkbox } from "../../components/Checkbox";
import { CheckboxList } from "../../components/CheckboxList";

import { Container } from "../../components/Container";
import { DateCalendar } from "../../components/DateCalendar";
import { DropDown } from "../../components/DropDown";
import { Pagination } from "../../components/Pagination/Pagination";
import { Slider } from "../../components/Slider";
import { MainLayout } from "../../layouts/MainLayout";
import { data1 } from "../../mocks";
import { useGetRooms } from "./hooks/useGetRooms";
import { usePagination } from "./hooks/usePagination";
import styles from "./rooms.module.scss";

const Rooms = () => {
  const { roomsData } = useGetRooms();

  const { pagination, filteredValues, pageLimit, onPageChanged } =
    usePagination({ roomsData });

  return (
    <MainLayout withFooterBorder>
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.container}>
            <div className={styles.roomsSlider}>
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
                {pagination.current_values.length > 0 ? (
                  pagination.current_values.map((room) => (
                    <CardSlider
                      rooms={room.rooms}
                      key={room._id}
                      number={room.number}
                      price={room.price}
                      comments={room.comments}
                      isLux={room.isLux}
                      id={room._id}
                    />
                  ))
                ) : (
                  <div>Загрузка...</div>
                )}
              </div>
              <div className={styles.pagination}>
                {filteredValues.length > 0 && (
                  <Pagination
                    pageLimit={pageLimit}
                    totalRecords={filteredValues.length}
                    onPageChanged={onPageChanged}
                    pageNeighbours={1}
                  />
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
};

export default Rooms;
