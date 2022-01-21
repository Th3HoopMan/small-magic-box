import React from "react";
import * as styles from "./FeaturePreview.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import CategorySubheading from "../CategorySubheading/CategorySubheading";

const FeaturePreview = ({ title, imgSrc, imageAlt, slug, date, category }) => {
  const thumbnail = getImage(imgSrc);

  const navigateToArticlePage = () => {
    navigate(slug);
  };

  return (
    <div
      className={styles.container}
      onClick={navigateToArticlePage}
      role="link"
      onKeyPress={navigateToArticlePage}
      tabIndex={0}
    >
      <GatsbyImage
        className={styles.thumbnail}
        image={thumbnail}
        alt={imageAlt}
      />
      <div className={styles.details}>
        <CategorySubheading category={category} date={date} />
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default FeaturePreview;
