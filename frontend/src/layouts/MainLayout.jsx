import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { FooterMobile } from "../components/FooterMobile";
import { Header } from "../components/Header";
import styles from "./mainLayout.module.scss";
export const MainLayout = ({
  children,

  withFooterBorder = false,
}) => {
  const user = localStorage.getItem("users");
  const username = JSON.parse(user);
  const [name, setName] = useState("");
  useEffect(() => {
    if (username) {
      setName(username.name);
    }
  }, [username]);
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Header isLogin={name} isLogotip />
          <main>{children}</main>
        </div>
        <Footer withFooterBorder={withFooterBorder} />
        <FooterMobile />
      </div>
    </>
  );
};
