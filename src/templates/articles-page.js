import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import * as styles from "../templateStyles/articles.module.css";
import ReviewList from "../components/ReviewList/ReviewList";
import PaginationControls from "../components/PaginationControls/PaginationControls";
import CompactArticlePreview from "../components/CompactArticlePreview/CompactArticlePreview";

// eslint-disable-next-line
export const ArticlesTemplate = ({ articles }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h1 className={styles.header}>Articles</h1>
        <p className={styles.details}>
          My opinions and reccomendations concerning all the games I've played
          on the platforms I played them on. Please see my post explaining my
          thought process for reviewing games.
        </p>
        <ul className={styles.list}>
          {articles.map((article) => (
            <li>
              <CompactArticlePreview
                title={article.title}
                category={article.category}
                slug={article.slug}
                imgSrc={article.featuredimage.childrenImageSharp[0]}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.sidebarContent}>
        <ReviewList />
      </div>
    </div>
  );
};

const ArticlesPage = ({ data, pageContext }) => {
  const articles = data.allMarkdownRemark.edges.map((edge) => {
    return {
      ...edge.node.frontmatter,
      slug: edge.node.fields.slug,
    };
  });

  console.dir(articles);
  console.dir(pageContext);

  return (
    <Layout>
      <ArticlesTemplate articles={articles} />
      {pageContext.numArticlePages > 1 && (
        <PaginationControls
          slug="articles"
          current={pageContext.currentPage}
          max={pageContext.numArticlePages}
        />
      )}
    </Layout>
  );
};

export default ArticlesPage;

export const articlesTemplateQuery = graphql`
  query ArticlesTemplate($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: {
        frontmatter: {
          category: { in: ["Gaming", "Film and Tv", "Off Topic"] }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            category
            title
            featuredimage {
              childrenImageSharp {
                gatsbyImageData
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
