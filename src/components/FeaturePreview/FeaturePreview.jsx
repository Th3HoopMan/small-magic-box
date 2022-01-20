import React from "react";
import * as styles from "./FeaturePreview.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";

const FeaturePreview = ({
  title,
  description,
  imgSrc,
  slug,
  date,
  category,
}) => {
  const thumbnail = getImage(imgSrc);

  const navigateToArticlePage = () => {
    navigate(slug);
  };

  const publishDate = new Date(date);
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div
      className={styles.container}
      onClick={navigateToArticlePage}
      role="link"
      onKeyPress={navigateToArticlePage}
      tabIndex={0}
    >
      <GatsbyImage className={styles.thumbnail} image={thumbnail} alt="" />
      <div className={styles.details}>
        <div className={styles.postMetadata}>
          <p className={styles.category}>{`${category}`}</p>
          <span>{`//`}</span>
          <p className={styles.date}>{`${publishDate.toLocaleDateString(
            "en-US",
            dateOptions
          )}`}</p>
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeaturePreview;
