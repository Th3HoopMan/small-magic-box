import React from "react";
import * as styles from "./CompactArticlePreview.module.css";
import { navigate } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const CompactArticlePreview = ({ category, title, slug, imgSrc }) => {
  const thumbnail = getImage(imgSrc);

  const navigateToArticlePage = () => {
    navigate(slug)
  }

  return (
    <div className={styles.container} onClick={navigateToArticlePage}>
        <GatsbyImage className={styles.thumbnail} image={thumbnail} alt="" />
    <div className={styles.details}>
    <h3 className={styles.category}>{category}</h3>
    <h2 className={styles.title}>{title}</h2>
    </div>
      
    </div>
  );
};

export default CompactArticlePreview;
