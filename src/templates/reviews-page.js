import React from "react";
import { Link, graphql, navigate } from "gatsby";
import Layout from "../components/Layout/Layout";
import * as styles from "../templateStyles/reviews.module.css";
import ArticleList from "../components/ArticleList/ArticleList";
import Seo from "../components/SEO";

const years = [2022];

const navigateToReview = (slug) => {
  navigate(slug);
};

// eslint-disable-next-line
export const ReviewsTemplate = ({ reviews }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h1 className={styles.header}>Reviews</h1>
        <p className={styles.details}>
          My opinions and recommendations concerning all the games I've played
          on the platforms I played them on. Please see{" "}
          <Link className={styles.link} to="/review-guide">my review guide</Link> which explains my
          thought process for reviewing games.
        </p>
        {years.map((year) => {
          return (
            <div>
              <h2 className={styles.yearHeader}>{year}</h2>
              <div>
                {reviews.map((review) => {
                  const reviewDate = new Date(review.date);
                  const reviewYear = reviewDate.getFullYear();
                  if (reviewYear === year) {
                    return (
                      <div
                        className={styles.reviewDetails}
                        onClick={() => {
                          navigateToReview(review.slug);
                        }}
                        role="link"
                        onKeyPress={() => {
                          navigateToReview(review.slug);
                        }}
                        tabIndex={0}
                      >
                        <h4 className={styles.reviewTitle}>
                          {review.gametitle}
                        </h4>
                        <p className={styles.reviewGrade}>{review.grade}</p>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          );
        })}
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
      <Seo customTitle="Reviews" customDescription="Reviews Page" />
      <ReviewsTemplate reviews={reviews} />
    </Layout>
  );
};

export default ReviewsPage;

export const reviewsQuery = graphql`
  query ReviewsTemplate {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "Review" } } }
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
            date
            imagealt
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
