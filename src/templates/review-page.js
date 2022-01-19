import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout/Layout";
import * as styles from "../templateStyles/review.module.css";
import ReviewPreview from "../components/ReviewPreview/ReviewPreview";
import ReviewList from "../components/ReviewList/ReviewList";
import ArticleList from "../components/ArticleList/ArticleList";

// eslint-disable-next-line
export const ReviewTemplate = ({
  title,
  tagline,
  category,
  imgSrc,
  content,
  date,
  gameDetails,
}) => {
  const publishDate = new Date(date);
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const featuredImage = getImage(imgSrc);
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.postDetails}>
          <div className={styles.postMetadata}>
            <p className={styles.category}>{`${category}`}</p>
            <span>//</span>
            <p className={styles.date}>{`${publishDate.toLocaleDateString(
              "en-US",
              dateOptions
            )}`}</p>
          </div>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.tagline}>{tagline}</h2>
          <GatsbyImage
            className={styles.headerImage}
            image={featuredImage}
            alt=""
          />
        </div>

        <span className={styles.divider} />

        <div dangerouslySetInnerHTML={{ __html: `${content}` }} />

        <ReviewPreview
          title={gameDetails.gameTitle}
          platforms={gameDetails.platforms}
          grade={gameDetails.grade}
        />
      </div>

      <div className={styles.additionContent}>
        <div className={styles.moreReviews}>
          <ReviewList />
        </div>
        <div className={styles.moreReviews}>
          <ArticleList />
        </div>
      </div>
    </div>
  );
};

const ReviewPage = ({ data }) => {
  const { markdownRemark: post } = data;

  console.dir(post);
  console.dir(post);

  console.dir(post);

  console.dir(post);

  return (
    <Layout>
      <ReviewTemplate
        title={post.frontmatter.title}
        tagline={post.frontmatter.tagline}
        category={post.frontmatter.category}
        imgSrc={post.frontmatter.featuredimage.childrenImageSharp[0]}
        content={post.html}
        date={post.frontmatter.date}
        gameDetails={{
          gameTitle: post.frontmatter.gametitle,
          platforms: post.frontmatter.platforms,
          grade: post.frontmatter.grade,
        }}
      />
    </Layout>
  );
};

export default ReviewPage;

export const reviewQuery = graphql`
  query ReviewPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        gametitle
        grade
        description
        category
        platforms
        tags
        title
        tagline
        date
        featuredimage {
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
      html
    }
  }
`;
