import React from "react";
import * as styles from "./FeaturePreview.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { navigate } from "gatsby"

const FeaturePreview = ({title, description, imgSrc, slug, children}) => {
  const thumbnail = getImage(imgSrc);

  const navigateToArticlePage = () => {
    navigate(slug)
  }
  return (
    <div className={styles.container} onClick={navigateToArticlePage}>
      <GatsbyImage className={styles.thumbnail} image={thumbnail} alt="" />
      <div className={styles.details}>
        {/* category banner */}
        {children}
        <h2>{title}</h2>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeaturePreview;
