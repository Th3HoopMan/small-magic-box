import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout/Layout";
import * as styles from "../templateStyles/review.module.css";
import ReviewPreview from "../components/ReviewPreview/ReviewPreview";
import ReviewList from "../components/ReviewList/ReviewList";
import ArticleList from "../components/ArticleList/ArticleList";
import Seo from "../components/SEO";
import Post from "../components/Post/Post";

// eslint-disable-next-line
export const ReviewTemplate = ({
  title,
  tagline,
  category,
  imgSrc,
  content,
  date,
  gameDetails,
  imagealt,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <Post
          title={title}
          tagline={tagline}
          category={category}
          imgSrc={imgSrc}
          content={content}
          date={date}
          imagealt={imagealt}
        />
        <ReviewPreview
          title={gameDetails.gameTitle}
          grade={gameDetails.grade}
        />
        <p>Want more insight in how I score games? Read my review guide which can be found <Link className={styles.link}  to="/review-guide">here</Link>.</p>
      </div>

      <div className={styles.additionContent}>
        <ReviewList />
        <ArticleList />
      </div>
    </div>
  );
};

const ReviewPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Seo
        customTitle={post.frontmatter.title}
        customDescription={post.frontmatter.tagline}
        customImage={post.frontmatter.featuredimage.relativePath}

      />
      <ReviewTemplate
        title={post.frontmatter.title}
        tagline={post.frontmatter.tagline}
        category={post.frontmatter.category}
        imgSrc={post.frontmatter.featuredimage.childrenImageSharp[0]}
        content={post.html}
        date={post.frontmatter.date}
        imagealt={post.frontmatter.imagealt}
        gameDetails={{
          gameTitle: post.frontmatter.gametitle,
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
        category
        tags
        title
        tagline
        date
        imagealt
        featuredimage {
          relativePath
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
      html
    }
  }
`;
