import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

import * as styles from "./ReviewList.module.css";
import ReviewPreview from "../ReviewPreview/ReviewPreview";

const ReviewList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { category: { eq: "Review" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              date
              gametitle
              grade
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const reviews = data.allMarkdownRemark.edges.map((edge) => {
    return {
      ...edge.node.frontmatter,
      slug: edge.node.fields.slug,
    };
  });

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionHeader}>Latest Reviews</h2>
      {reviews.map((review) => (
        <ReviewPreview
          title={review.gametitle}
          grade={review.grade}
          slug={review.slug}
        />
      ))}
      <Link className={styles.link} to="/reviews">
        <p>View All Reviews →</p>
      </Link>
    </div>
  );
};

export default ReviewList;
