import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import styles from "./mainLayout.module.css";
export const MainLayout = ({
  children,

  withFooterBorder = false,
}) => (
  <>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Header isLogotip />
        <main>{children}</main>
      </div>
      <Footer withFooterBorder={withFooterBorder} />
    </div>
  </>
);
