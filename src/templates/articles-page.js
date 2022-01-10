import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import Search from "../components/Search/Search";
import * as styles from "../templateStyles/articles.module.css";
import ReviewList from "../components/ReviewList/ReviewList";

const searchFilter = (item, searchText) => {
  return item.title.toLowerCase().trim().includes(searchText);
};

// eslint-disable-next-line
export const ArticlesTemplate = ({ articles }) => {
  // const PageContent = contentComponent || Content;

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h1 className={styles.header}>Articles</h1>
        <p className={styles.details}>
          My opinions and reccomendations concerning all the games I've played
          on the platforms I played them on. Please see my post explaining my
          thought process for reviewing games.
        </p>
        <Search
          data={articles}
          searchFilter={searchFilter}
        />
      </div>
      <div className={styles.sidebarContent}>
        <ReviewList />
      </div>
    </div>
  );
};

const ArticlesPage = ({ data }) => {
  const articles = data.allMarkdownRemark.edges.map((edge) => {
    return {
      ...edge.node.frontmatter,
      slug: edge.node.fields.slug,
    };
  });

  return (
    <Layout>
      <ArticlesTemplate articles={articles} />
    </Layout>
  );
};

export default ArticlesPage;

export const articklessQuery = graphql`
  query ArticlesTemplate {
    allMarkdownRemark(
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
            grade
            gametitle
            platforms
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
