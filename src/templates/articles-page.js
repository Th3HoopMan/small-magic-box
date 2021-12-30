import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import Search from "../components/Search/Search";
import * as styles from "./reviews.module.css";
import ReviewPreview from "../components/ReviewPreview/ReviewPreview";

const loremIpsumBlurb =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis dolor nisi. Morbi semper nibh eget lectus vestibulum rhoncus. ";

const fakePostData = [
  {
    title: "343's Halo Infinite Signals A Strong Generation for Xbox",
    blurb: loremIpsumBlurb,
    imgSrc: "https://cdn.mos.cms.futurecdn.net/Reze3foLZuQ5e8DrBPA6aW.jpg",
    category: "Review",
    gameTitle: "Halo Infinite",
    platform: "Xbox Series X",
    grade: "B+",
  },
  {
    title: "What Are the Game Awards Really About?",
    blurb: loremIpsumBlurb,
    imgSrc:
      "https://cdn1.dotesports.com/wp-content/uploads/2021/11/11122728/L2GpNUt9NcmPRqYaPnnF9R.jpeg",
    category: "IndustryOpinion",
  },
  {
    title: "When Will We Get a Solid Anime Action/Adventure Game?",
    blurb: loremIpsumBlurb,
    imgSrc: "https://pbs.twimg.com/media/EzsGIYBWUAIjXDm.jpg",
    category: "Entertainment",
  },
  {
    title: "343's Halo Infinite Signals A Strong Generation for Xbox",
    blurb: loremIpsumBlurb,
    imgSrc: "https://cdn.mos.cms.futurecdn.net/Reze3foLZuQ5e8DrBPA6aW.jpg",
    category: "Review",
    gameTitle: "Halo Infinite",
    platform: "Xbox Series X",
    grade: "B+",
  },
  {
    title: "What Are the Game Awards Really About?",
    blurb: loremIpsumBlurb,
    imgSrc:
      "https://cdn1.dotesports.com/wp-content/uploads/2021/11/11122728/L2GpNUt9NcmPRqYaPnnF9R.jpeg",
    category: "IndustryOpinion",
  },
  {
    title: "When Will We Get a Solid Anime Action/Adventure Game?",
    blurb: loremIpsumBlurb,
    imgSrc: "https://pbs.twimg.com/media/EzsGIYBWUAIjXDm.jpg",
    category: "Entertainment",
  },
];

const searchFilter = (item, searchText) => {
  return (
    item.category.toLowerCase().trim() !== "review" &&
    item.title.toLowerCase().trim().includes(searchText)
  );
};

// eslint-disable-next-line
export const ArticlesTemplate = () => {
  // const PageContent = contentComponent || Content;

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h1 className={styles.header}>Articles</h1>
        <p className={styles.details}>
          My opinions and reccomendations concerning all the games I've played
          on the platforms I played them on. Please see my post explaining my
          thought process for reviewing games.
        </p>
        <Search
          data={fakePostData.filter(
            (post) => post.category.toLowerCase() !== "review"
          )}
          searchFilter={searchFilter}
        />
      </div>
      <div className={styles.sidebarContent}>
        <h3 className={styles.sectionHeader}>Recent Reviews</h3>
        {fakePostData
          .filter((post) => post.category.toLowerCase() === "review")
          .map((post) => (
            <ReviewPreview
              title={post.gameTitle}
              platform={post.platform}
              grade={post.grade}
            />
          ))}
        <p>View All Reviews</p>
      </div>
    </div>
  );
};

// AboutPageTemplate.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string,
//   contentComponent: PropTypes.func,
// };

const ArticlesPage = () => {
  // const { markdownRemark: post } = data;

  return (
    <Layout>
      <ArticlesTemplate />
    </Layout>
  );
};

// AboutPage.propTypes = {
//   data: PropTypes.object.isRequired,
// };

export default ArticlesPage;
