import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby"

import * as styles from "./ReviewList.module.css";
import ReviewPreview from "../ReviewPreview/ReviewPreview";

const ReviewList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "review" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              gametitle
              grade
              platforms
            }
            fields {
                slug
            }
          }
        }
      }
    }
  `);

  const reviews  = data.allMarkdownRemark.edges.map((edge) => {
      return {
          ...edge.node.frontmatter, 
          slug: edge.node.fields.slug
      }
  });


  return (
    <div className={styles.section}>
      <h3 className={styles.sectionHeader}>Recent Reviews</h3>
      {reviews
        .map((review) => (
          <ReviewPreview
            title={review.gametitle}
            platforms={review.platforms}
            grade={review.grade}
            slug={review.slug}
          />
        ))}
      <Link className={styles.link} to="/reviews">View All Reviews →</Link>
    </div>
  );
};

export default ReviewList;