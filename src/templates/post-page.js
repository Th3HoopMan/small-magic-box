import React from "react";
import CategoryBanner from "../components/CategoryBanner/CategoryBanner";
import Layout from "../components/Layout/Layout";
import * as styles from "./post.module.css";
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

  return (
    <div className={styles.container}>
      <CategoryBanner category={category} />
      <h1 className={styles.title}>{title}</h1>
      <img src={imgSrc} />
      <span className={styles.divider} />
      <p className={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ex lacus.
        Sed consectetur tortor pretium felis fringilla, nec sodales erat
        egestas. Aenean elementum maximus ultricies. Praesent quis dolor et
        augue volutpat varius sit amet id lacus. Suspendisse lobortis urna id mi
        condimentum iaculis. Ut vel nibh at mi pharetra tempus et id ligula.
        Mauris libero tellus, venenatis eget volutpat quis, convallis at mauris.
        Suspendisse volutpat nisl lectus, quis euismod nisl pellentesque quis.
        Maecenas viverra non erat non blandit. Mauris ex elit, luctus id
        sollicitudin nec, volutpat et metus. Suspendisse vel sem lacus. Mauris
        porta nec ante vel congue. Maecenas ullamcorper diam et sodales pretium.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Phasellus interdum finibus elit quis consequat.
        Morbi tempor volutpat arcu, at blandit urna laoreet a.
      </p>
      {gameDetails && (
        <ReviewPreview
          title={gameDetails.gameTitle}
          platform={gameDetails.platform}
          grade={gameDetails.grade}
        />
      )}
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
