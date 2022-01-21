import React from "react";
import * as styles from "./CategorySubheading.module.css";


const CategorySubheading = ({ category, date }) => {

  const publishDate = new Date(date);
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={styles.postMetadata}>
    <p className={styles.category}>{`${category}`}</p>
    <span>{`//`}</span>
    <p className={styles.date}>{`${publishDate.toLocaleDateString(
      "en-US",
      dateOptions
    )}`}</p>
  </div>
  );
};

export default CategorySubheading;
