import React from "react";
import CategoryBanner from "../components/CategoryBanner/CategoryBanner";
import Layout from "../components/Layout/Layout";
import * as styles from "./post.module.css";
import ReviewPreview from "../components/ReviewPreview/ReviewPreview";
import CompactArticlePreview from "../components/CompactArticlePreview/CompactArticlePreview";

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
  gameDetails,
}) => {
  // const PageContent = contentComponent || Content;

  const isReview = !!gameDetails;
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <CategoryBanner category={category} />
        <h1 className={styles.title}>{title}</h1>
        <img src={imgSrc} />
        <span className={styles.divider} />
        <p className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ex
          lacus. Sed consectetur tortor pretium felis fringilla, nec sodales
          erat egestas. Aenean elementum maximus ultricies. Praesent quis dolor
          et augue volutpat varius sit amet id lacus. Suspendisse lobortis urna
          id mi condimentum iaculis. Ut vel nibh at mi pharetra tempus et id
          ligula. Mauris libero tellus, venenatis eget volutpat quis, convallis
          at mauris. Suspendisse volutpat nisl lectus, quis euismod nisl
          pellentesque quis. Maecenas viverra non erat non blandit. Mauris ex
          elit, luctus id sollicitudin nec, volutpat et metus. Suspendisse vel
          sem lacus. Mauris porta nec ante vel congue. Maecenas ullamcorper diam
          et sodales pretium. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Phasellus interdum finibus
          elit quis consequat. Morbi tempor volutpat arcu, at blandit urna
          laoreet a.
        </p>
        {isReview && (
          <ReviewPreview
            title={gameDetails.gameTitle}
            platform={gameDetails.platform}
            grade={gameDetails.grade}
          />
        )}
      </div>
      <div className={styles.additionContent}>
        {isReview && (
          <div className={styles.moreReviews}>
            <h3 className={styles.sectionHeader}>More Reviews</h3>
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
        )}
        {!isReview && (
          <div className={styles.section}>
            <h3 className={styles.sectionHeader}>More Articles</h3>
            {fakePostData
              .filter((post) => post.category.toLowerCase() !== "review")
              .map((post) => (
                <CompactArticlePreview
                  title={post.title}
                  category={post.category}
                />
              ))}
            <p>View All Articles</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ArticlesPage = () => {
  return (
    <Layout>
      <PostTemplate
        title={HaloReviewPost.title}
        category={HaloReviewPost.category}
        imgSrc={HaloReviewPost.imgSrc}
        gameDetails={{
          gameTitle: HaloReviewPost.gameTitle,
          platform: HaloReviewPost.platform,
          grade: HaloReviewPost.grade,
        }}
      />
    </Layout>
  );
};

export default ArticlesPage;
