import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import CategoryBanner from "../components/CategoryBanner/CategoryBanner";
import Layout from "../components/Layout/Layout";
import * as styles from "./post.module.css";
import ReviewPreview from "../components/ReviewPreview/ReviewPreview";
import CompactArticlePreview from "../components/CompactArticlePreview/CompactArticlePreview";
import ReviewList from "../components/ReviewList/ReviewList";

const loremIpsumBlurb =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis dolor nisi. Morbi semper nibh eget lectus vestibulum rhoncus. ";

const HaloReviewPost = {
  title: "343's Halo Infinite Signals A Strong Generation for Xbox",
  blurb: loremIpsumBlurb,
  imgSrc: "https://cdn.mos.cms.futurecdn.net/Reze3foLZuQ5e8DrBPA6aW.jpg",
  category: "Review",
  gameTitle: "Halo Infinite",
  platform: "Xbox Series X",
  grade: "B+",
};
// eslint-disable-next-line
export const PostTemplate = ({
  title,
  category,
  imgSrc,
  content,
  tldr,
  date,
  gameDetails,
}) => {
  // const PageContent = contentComponent || Content;

  const isReview = !!gameDetails;
  const publishDate = new Date(date);
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={styles.container}>
      {/* Post Details */}
      <div className={styles.postDetails}>
        <CategoryBanner category={category} />
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.tagline}>Double Fine returns to the spotlight in spectacular fashion</h2>
        <p className={styles.publishDate}>{`${publishDate.toLocaleDateString("en-US", dateOptions)} by Joseph Hooper`}</p>
      </div>

      <span className={styles.divider} />

      <div className={styles.mainContent}>

        {/* <GatsbyImage image={coverImage} alt=""/> */}

        
        <img src="https://www.mobygames.com/images/covers/l/759338-psychonauts-2-windows-front-cover.jpg" />

        
        <div dangerouslySetInnerHTML={{ __html: `${content}` }} />
        {isReview && (
          <ReviewPreview
            title={gameDetails.gameTitle}
            platforms={gameDetails.platforms}
            grade={gameDetails.grade}
          />
        )}
      </div>
      <div className={styles.additionContent}>
        {isReview && (
          <div className={styles.moreReviews}>
            <h3 className={styles.sectionHeader}>More Reviews</h3>
            <ReviewList />
            <p>View All Reviews</p>
          </div>
        )}
        {!isReview && (
          <div className={styles.sectioFn}>
            <h3 className={styles.sectionHeader}>More Articles</h3>
            {/* {fakePostData
              .filter((post) => post.category.toLowerCase() !== "review")
              .map((post) => (
                <CompactArticlePreview
                  title={post.title}
                  category={post.category}
                />
              ))} */}
            <p>View All Articles</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ArticlesPage = ({ data }) => {
  const { markdownRemark: post } = data;

  console.dir(post);
  return (
    <Layout>
      <PostTemplate
        title={post.frontmatter.title}
        category={post.frontmatter.category}
        // imgSrc={post.frontmatter.featuredimage.childrenImageSharp[0]}
        content={post.html}
        tldr={post.frontmatter.tldr}
        date={post.frontmatter.date}
        gameDetails={{
          gameTitle: post.frontmatter.gametitle,
          platforms: post.platforms,
          grade: post.frontmatter.grade,
        }}
      />
    </Layout>
  );
};

export default ArticlesPage;

export const pageQuery = graphql`
  query ArticlePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        gametitle
        grade
        heading
        description
        category
        platforms
        tags
        title
        tldr
        date
        featuredimage {
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
      html
    }
  }
`;
