import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./Post.module.css";
import CategorySubheading from "../CategorySubheading/CategorySubheading";

// eslint-disable-next-line
export const Post = ({
  title,
  tagline,
  category,
  imgSrc,
  content,
  date,
  imagealt,
}) => {
  const featuredImage = getImage(imgSrc);

  return (
    <div className={styles.container}>
      <div className={styles.postDetails}>
        <CategorySubheading category={category} date={date} />
        <h1 className={styles.title}>{title}</h1>
        <h1 className={styles.tagline}>{tagline}</h1>
        <GatsbyImage
          className={styles.headerImage}
          image={featuredImage}
          alt={imagealt}
        />
      </div>

      <span className={styles.divider} />

      <div className={styles.content} dangerouslySetInnerHTML={{ __html: `${content}` }} />
    </div>
  );
};

export default Post;
