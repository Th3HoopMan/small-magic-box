import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import * as styles from "../templateStyles/postpage.module.css";
import ReviewList from "../components/ReviewList/ReviewList";
import ArticleList from "../components/ArticleList/ArticleList";
import Seo from "../components/SEO";
import Post from "../components/Post/Post";

// eslint-disable-next-line
export const PostTemplate = ({
  title,
  tagline,
  category,
  imgSrc,
  content,
  date,
}) => {

  return (
    <div className={styles.container}>
      <Post
        title={title}
        tagline={tagline}
        category={category}
        imgSrc={imgSrc}
        content={content}
        date={date}
      />

      <div className={styles.additionContent}>
          <ArticleList />
          <ReviewList />
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
        customImage={post.frontmatter.featuredimage.relativePath}
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
