import React from "react";
import { Container } from "../../components/Container";
import { SignUp } from "../../components/SignUp";
import { MainLayout } from "../../layouts/MainLayout";
import styles from "./sign.module.scss";

export const SignIn = () => {
  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.container}>
            <SignUp />
          </div>
        </Container>
      </div>
    </MainLayout>
  );
};
