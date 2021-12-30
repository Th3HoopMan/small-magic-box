import React from "react";
import * as styles from "./PostHeader.module.css";
import CategoryBanner from "../CategoryBanner/CategoryBanner";

const PostHeader = ({title, date, imgSrc}) => {
  return (
    <div className={styles.container}>
      <CategoryBanner category="Review" />
      <div className={styles.details}>
        <h1>{title}</h1>
        <h5>{date}</h5>
      </div>
      <img src={imgSrc}/>
      <div className={styles.border} />
    </div>
  );
};

export default PostHeader;
