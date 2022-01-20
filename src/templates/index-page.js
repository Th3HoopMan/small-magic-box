import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import FeaturePreview from "../components/FeaturePreview/FeaturePreview";

import * as styles from "../templateStyles/index.module.css";
import ReviewList from "../components/ReviewList/ReviewList";

// eslint-disable-next-line
export const IndexPageTemplate = ({ articles }) => {
  // const heroImage = getImage(image) || image;

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.sectionHeader}>Latest Articles</h2>
        {articles.map((post) => (
          <FeaturePreview
            title={post.title}
            imgSrc={post.featuredimage.childrenImageSharp[0]}
            imageAlt={post.imagealt}
            slug={post.slug}
            date={post.date}
            category={post.category}
          />
        ))}
        <Link className={styles.viewArticlesLink} to="/articles">
          <p>View All Articles →</p>
        </Link>
      </div>
      <div className={styles.section}>
        <ReviewList />
      </div>
    </div>
  );
};

const IndexPage = ({ data }) => {
  const articles = data.allMarkdownRemark.edges.map((edge) => {
    return {
      ...edge.node.frontmatter,
      slug: edge.node.fields.slug,
    };
  });

  console.dir(articles);
  return (
    <Layout>
      <IndexPageTemplate articles={articles} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: { frontmatter: { category: { ne: null } } }
      limit: 10
    ) {
      edges {
        node {
          frontmatter {
            category
            title
            date
            imagealt
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
