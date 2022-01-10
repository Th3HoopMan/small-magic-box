import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import FeaturePreview from "../components/FeaturePreview/FeaturePreview";
import CategoryBanner from "../components/CategoryBanner/CategoryBanner";

import * as styles from "../templateStyles/index.module.css";
import ArticleList from "../components/ArticleList/ArticleList";
import ReviewList from "../components/ReviewList/ReviewList";

// eslint-disable-next-line
export const IndexPageTemplate = ({ articles }) => {
  // const heroImage = getImage(image) || image;

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        {articles.map((post) => (
          <FeaturePreview
            title={post.title}
            description={post.description}
            imgSrc={post.featuredimage.childrenImageSharp[0]}
            slug={post.slug}
          >
            <CategoryBanner
              category={post.category}
              grade={post.grade ? post.grade : null}
            />
          </FeaturePreview>
        ))}
        <Link className="viewArticlesLink" to="/articles">
          View Latest Articles →
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
      filter: { frontmatter: { category: { ne: null } } }
      limit: 10
    ) {
      edges {
        node {
          frontmatter {
            category
            title
            description
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
