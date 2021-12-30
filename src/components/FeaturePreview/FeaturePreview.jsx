import React from "react";
import * as styles from "./FeaturePreview.module.css";

import CategoryBanner from '../CategoryBanner/CategoryBanner';

const FeaturePreview = ({title, blurb, imgSrc, children}) => {
  return (
    <div className={styles.container}>
      <img src={imgSrc} />
      <div className={styles.details}>
        {/* category banner */}
        {children}
        <h2>{title}</h2>
        <p>
          {blurb}
        </p>
      </div>
    </div>
  );
};

export default FeaturePreview;
