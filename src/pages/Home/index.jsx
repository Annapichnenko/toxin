import React from "react";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { MainLayout } from "../../layouts/MainLayout";
import styles from "./home.module.scss";
export const Home = () => {
  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.container}>
            <Card />
            <div className={styles.span}>
              Лучшие номера для вашей работы, отдыха и просто вдохновения
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
};
