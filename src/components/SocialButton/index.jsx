import React from "react";
import styles from "./social.module.scss";
import image from "./soc.png";
import image1 from "./soc1.png";
import image2 from "./soc2.png";
export const SocialButton = () => {
  return (
    <div className={styles.social}>
      <img src={image} />
      <img src={image1} />
      <img src={image2} />
    </div>
  );
};
