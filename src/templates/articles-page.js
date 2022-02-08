import React from "react";
import { graphql, navigate } from "gatsby";
import Layout from "../components/Layout/Layout";
import * as styles from "../templateStyles/articles.module.css";
import ReviewList from "../components/ReviewList/ReviewList";
import Seo from "../components/SEO";

// eslint-disable-next-line
export const ArticlesTemplate = ({ articles }) => {
  // const PageContent = contentComponent || Content;

  const years = [2022];
  const dateOptions = {
    month: "short",
    day: "numeric",
  };

  const navigateToArticle = (slug) => {
    navigate(slug);
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h1 className={styles.header}>Articles</h1>
        <p className={styles.details}>
          My opinions and reccomendations concerning all the games I've played
          on the platforms I played them on. Please see my post explaining my
          thought process for reviewing games.
        </p>
        {years.map((year) => {
          return (
            <div>
              <h2 className={styles.yearHeader}>{year}</h2>
              <div>
                {articles.map((article) => {
                  const articleDate = new Date(article.date);
                  const articleYear = articleDate.getFullYear();
                  const articleMonthDay = articleDate.toLocaleDateString(
                    "en-US",
                    dateOptions
                  );
                  if (articleYear === year) {
                    return (
                      <div
                        className={styles.articleDetails}
                        onClick={() => {
                          navigateToArticle(article.slug);
                        }}
                        role="link"
                        onKeyPress={() => {
                          navigateToArticle(article.slug);
                        }}
                        tabIndex={0}
                      >
                        <h4 className={styles.articleTitle}>{article.title}</h4>

                        <p className={styles.articleDate}>{articleMonthDay}</p>
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
        <ReviewList />
      </div>
    </div>
  );
};

const ArticlesPage = ({ data, pageContext }) => {
  const articles = data.allMarkdownRemark.edges.map((edge) => {
    return {
      ...edge.node.frontmatter,
      slug: edge.node.fields.slug,
    };
  });

  console.dir(articles);
  console.dir(pageContext);

  return (
    <Layout>
      <Seo customTitle="Articles" customDescription="Articles Page" />
      <ArticlesTemplate articles={articles} />
    </Layout>
  );
};

export default ArticlesPage;

export const articlesTemplateQuery = graphql`
  query ArticlesTemplate {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
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
            grade
            gametitle
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
