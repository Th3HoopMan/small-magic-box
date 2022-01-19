import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

import * as styles from "./ArticleList.module.css";
import CompactArticlePreview from "../CompactArticlePreview/CompactArticlePreview";

const ArticleList = () => {
  const data = useStaticQuery(graphql`
    query {
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
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const articles = data.allMarkdownRemark.edges.map((edge) => {
    return {
      ...edge.node.frontmatter,
      slug: edge.node.fields.slug,
    };
  });

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionHeader}>Latest Articles</h2>
      {articles.map((article) => (
        <CompactArticlePreview
          title={article.title}
          category={article.category}
          slug={article.slug}
          imgSrc={article.featuredimage.childrenImageSharp[0]}
        />
      ))}
      <Link className={styles.link} to="/articles">
        <p>View All Articles →</p>
      </Link>
    </div>
  );
};

export default ArticleList;
