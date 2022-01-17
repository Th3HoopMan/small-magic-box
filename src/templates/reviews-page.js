import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import Search from "../components/Search/Search";
import CompactArticlePreview from "../components/CompactArticlePreview/CompactArticlePreview";
import * as styles from "../templateStyles/reviews.module.css";
import ArticleList from "../components/ArticleList/ArticleList";

const searchFilter = (item, searchText) => {
  let platformFound = false;
  console.log(item.platforms);
  for (let i = 0; i < item.platforms.length; i++) {
    if (item.platforms[i].toLowerCase().search(searchText.toLowerCase()) >= 0) {
      platformFound = true;
    }
  }
  
  return (
    item.gametitle.toLowerCase().trim().includes(searchText) || platformFound
  );
};

// eslint-disable-next-line
export const ReviewsTemplate = ({ reviews }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h1 className={styles.header}>Reviews</h1>
        <p className={styles.details}>
          My opinions and reccomendations concerning all the games I've played
          on the platforms I played them on. Please see my post explaining my
          thought process for reviewing games.
        </p>
        <Search data={reviews} searchFilter={searchFilter} review={true} />
      </div>
      <div className={styles.sidebarContent}>
        <ArticleList />
      </div>
    </div>
  );
};

// AboutPageTemplate.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string,
//   contentComponent: PropTypes.func,
// };

const ReviewsPage = ({ data }) => {
  const reviews = data.allMarkdownRemark.edges.map((edge) => {
    return {
      ...edge.node.frontmatter,
      slug: edge.node.fields.slug,
    };
  });

  return (
    <Layout>
      <ReviewsTemplate reviews={reviews} />
    </Layout>
  );
};

export default ReviewsPage;

export const reviewsQuery = graphql`
  query ReviewsTemplate($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: {
        frontmatter: {
          category: { eq: "Review" }
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
