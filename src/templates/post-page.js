import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout/Layout";
import * as styles from "../templateStyles/post.module.css";
import ReviewList from "../components/ReviewList/ReviewList";
import ArticleList from "../components/ArticleList/ArticleList";
import Seo from "../components/SEO";

// eslint-disable-next-line
export const PostTemplate = ({
  title,
  tagline,
  category,
  imgSrc,
  content,
  date,
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
            <span>{`//`}</span>
            <p>{`${publishDate.toLocaleDateString(
              "en-US",
              dateOptions
            )}`}</p>
          </div>
          <h1 className={styles.title}>{title}</h1>
          <h4 className={styles.tagline}>{tagline}</h4>
          <GatsbyImage
            className={styles.headerImage}
            image={featuredImage}
            alt=""
          />
        </div>

        <span className={styles.divider} />

        <div dangerouslySetInnerHTML={{ __html: `${content}` }} />
      </div>

      <div className={styles.additionContent}>
        <div>
          <ArticleList />
        </div>
        <div>
          <ReviewList />
        </div>
      </div>
    </div>
  );
};

const ArticlesPage = ({ data }) => {
  const { markdownRemark: post } = data;

  console.dir(post);
  return (
    <Layout>
      <Seo
        customTitle={post.frontmatter.title}
        customDescription={post.frontmatter.tagline}
      />

      <PostTemplate
        title={post.frontmatter.title}
        tagline={post.frontmatter.tagline}
        category={post.frontmatter.category}
        imgSrc={post.frontmatter.featuredimage.childrenImageSharp[0]}
        content={post.html}
        date={post.frontmatter.date}
      />
    </Layout>
  );
};

export default ArticlesPage;

export const pageQuery = graphql`
  query ArticlePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        category
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
