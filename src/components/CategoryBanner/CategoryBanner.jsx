import React from "react";
import * as styles from "./CategoryBanner.module.css";
import { iconMap } from '../utils';

const CategoryBanner = ({ category, grade }) => {
  return (
    <>
      <div className={styles.container}>
        <img src={iconMap[category.toLowerCase()]} />
        <h3>{category}</h3>
        {!!grade && (
          <div className={styles.grade}>
            <p>{grade}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryBanner;
