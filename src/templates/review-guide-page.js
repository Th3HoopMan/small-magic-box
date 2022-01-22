import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import * as styles from "../templateStyles/reviewGuide.module.css";
import Seo from "../components/SEO";
// eslint-disable-next-line
export const ReviewGuidePageTemplate = ({ title, content }) => {
  return (
    <section className="section section--gradient">
      <div className={styles.container}>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className={styles.title}>How I Review Games</h2>
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ReviewGuidePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ReviewGuidePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Seo customTitle="ReviewGuide" customDescription="ReviewGuide Page" />
      <ReviewGuidePageTemplate title={post.frontmatter.title} content={post.html} />
    </Layout>
  );
};

ReviewGuidePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ReviewGuidePage;

export const reviewGuidePageQuery = graphql`
  query ReviewGuidePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
