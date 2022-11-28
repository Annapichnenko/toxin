import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { MainLayout } from "../../layouts/MainLayout";
import styles from "./home.module.scss";
export const Home = () => {
  const [title, setTitle] = useState("загрузка...");

  useEffect(() => {
    fetch("http://localhost:5000/api/datas")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("data", data);
        setTitle(data[0].title);
      });
  }, []);

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.container}>
            <Card />
            <div className={styles.span}>{title}</div>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
};
