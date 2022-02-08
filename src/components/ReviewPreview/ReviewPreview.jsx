import React from "react";
import * as styles from "./ReviewPreview.module.css";
import { navigate } from "gatsby";

const ReviewPreview = ({ title, grade, slug }) => {
  const navigateToReviewPage = () => {
    navigate(slug);
  };

  return (
    <div
      className={styles.container}
      onClick={navigateToReviewPage}
      role="link"
      onKeyPress={navigateToReviewPage}
      tabIndex={0}
    >
      <div className={styles.details}>
        <h2>{title}</h2>
      </div>
      <div className={styles.grade}>
        <h3>{grade}</h3>
      </div>
    </div>
  );
};

export default ReviewPreview;
