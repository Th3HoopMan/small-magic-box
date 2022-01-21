import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import * as styles from "../templateStyles/about.module.css";
import Seo from "../components/SEO";
// eslint-disable-next-line
export const AboutPageTemplate = ({ title, content }) => {
  return (
    <section className="section section--gradient">
      <div className={styles.container}>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className={styles.title}>{title}</h2>
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

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Seo customTitle="About" customDescription="About Page" />
      <AboutPageTemplate title={post.frontmatter.title} content={post.html} />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
