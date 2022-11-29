import React from "react";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { MainLayout } from "../../layouts/MainLayout";
import styles from "./home.module.scss";
import { useGetTitle } from "./hooks/useGetTitle";

export const Home = () => {
  const { title } = useGetTitle();

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
