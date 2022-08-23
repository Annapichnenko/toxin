import React from "react";
import { Container } from "../../components/Container";
import { MainLayout } from "../../layouts/MainLayout";
import styles from "./registration.module.scss";
import { RegistrationForm } from "../../components/RegistrationForm";
export const Registration = () => {
  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.container}>
            <RegistrationForm />
          </div>
        </Container>
      </div>
    </MainLayout>
  );
};
