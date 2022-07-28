import React from "react";
import { Logotip } from "../Logotip";
import { SocialButton } from "../SocialButton";
import styles from "./mobile.module.css";
export const FooterMobile = () => {
  return (
    <div className={styles.mobile}>
      <div className={styles.logo}>
        <Logotip />
      </div>
      <h4 className={styles.title}>
        Copyright © 2018 Toxin отель. Все права защищены.
      </h4>
      <div className={styles.social}>
        <SocialButton />
      </div>
    </div>
  );
};
