import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import CategoryBanner from "../components/CategoryBanner/CategoryBanner";
import Layout from "../components/Layout/Layout";
import * as styles from "./review.module.css";
import ReviewPreview from "../components/ReviewPreview/ReviewPreview";
import ReviewList from "../components/ReviewList/ReviewList";
import ArticleList from "../components/ArticleList/ArticleList";

const loremIpsumBlurb =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis dolor nisi. Morbi semper nibh eget lectus vestibulum rhoncus. ";

const HaloReviewPost = {
  title: "343's Halo Infinite Signals A Strong Generation for Xbox",
  blurb: loremIpsumBlurb,
  imgSrc: "https://cdn.mos.cms.futurecdn.net/Reze3foLZuQ5e8DrBPA6aW.jpg",
  category: "Review",
  gameTitle: "Halo Infinite",
  platform: "Xbox Series X",
  grade: "B+",
};
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
  // const PageContent = contentComponent || Content;

  const publishDate = new Date(date);
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  console.dir(imgSrc);
  const featuredImage = getImage(imgSrc);
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.postDetails}>
          <CategoryBanner category={category} />
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.tagline}>
            {tagline}
          </h2>
          <GatsbyImage className={styles.headerImage} image={featuredImage} alt=""/>
          <p className={styles.publishDate}>{`By Joseph Hooper on ${publishDate.toLocaleDateString(
            "en-US",
            dateOptions
          )} `}</p>
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
        heading
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
