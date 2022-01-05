import React from "react";
import * as styles from "./ReviewPreview.module.css";
import { navigate } from "gatsby"

const ReviewPreview = ({title, platforms, grade, slug}) => {

  const navigateToReviewPage = () => {
    navigate(slug)
  }

  return (
    <div className={styles.container} onClick={navigateToReviewPage}>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h5>{typeof platforms === "object" ? platforms.join(", "): platforms}</h5>
      </div>
      <div className={styles.grade}>
        <h3>{grade}</h3>
      </div>
    </div>
  );
};

export default ReviewPreview;
