import React from "react";
import * as styles from "./ReviewPreview.module.css";

const ReviewPreview = ({title, platform, grade}) => {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h5>{platform}</h5>
      </div>
      <div className={styles.grade}>
        <h3>{grade}</h3>
      </div>
    </div>
  );
};

export default ReviewPreview;
