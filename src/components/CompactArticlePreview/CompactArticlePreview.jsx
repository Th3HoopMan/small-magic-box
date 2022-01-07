import React from "react";
import * as styles from "./CompactArticlePreview.module.css";
import { iconMap } from "../utils";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const CompactArticlePreview = ({ category, title, slug, imgSrc }) => {
  const thumbnail = getImage(imgSrc);
  return (
    <div className={styles.container}>
        <GatsbyImage className={styles.thumbnail} image={thumbnail} alt="" />
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default CompactArticlePreview;
