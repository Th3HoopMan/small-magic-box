import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import FeaturePreview from "../components/FeaturePreview/FeaturePreview";

import * as styles from "../templateStyles/index.module.css";
import ReviewList from "../components/ReviewList/ReviewList";
import Seo from "../components/SEO";
import logo from "../img/CantPauseLogoV2.svg";

// eslint-disable-next-line
export const IndexPageTemplate = ({ articles }) => {
  // const heroImage = getImage(image) || image;

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <section className={styles.opener}>
          <h1>
            
            <img
              className={styles.logo}
              src={logo}
              alt="logo"
            />
          </h1>
          <p className={styles.openerContent}>
            This is a blog that discusses video game news from one hobbyist's
            perspective. I will cover a lot of news, but this is 
            <span className={styles.notNews}> not</span> a news site. At the end of the day it's just my
            take on anything in video games (and other media) I find interesting. Learn more about the site by
            clicking the button below.
          </p>
          <Link to="/about" className={styles.learnMore}>
            <h2 className={styles.learnMoreButton}>About the Site</h2>
          </Link>
        </section>
        <section className={styles.articlesSection}>
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
        </section>
      </section>
      <section className={styles.section}>
        <ReviewList />
      </section>
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
      <Seo />
      <IndexPageTemplate articles={articles} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
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
