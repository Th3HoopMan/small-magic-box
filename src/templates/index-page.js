import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout/Layout";
import FeaturePreview from "../components/FeaturePreview/FeaturePreview";
import CategoryBanner from "../components/CategoryBanner/CategoryBanner";
import ReviewPreview from "../components/ReviewPreview/ReviewPreview";
import CompactArticlePreview from "../components/CompactArticlePreview/CompactArticlePreview";

import * as styles from "./index.module.css";
import ReviewList from "../components/ReviewList/ReviewList";

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
// eslint-disable-next-line
export const IndexPageTemplate = () => {
  // const heroImage = getImage(image) || image;

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        {fakePostData.map((post) => (
          <FeaturePreview
            title={post.title}
            blurb={post.blurb}
            imgSrc={post.imgSrc}
          >
            <CategoryBanner
              category={post.category}
              grade={post.grade ? post.grade : null}
            />
          </FeaturePreview>
        ))}
      </div>
      <div>
        <div className={styles.section}>
          <ReviewList />
          {/* <h3 className={styles.sectionHeader}>Recent Reviews</h3>
          {fakePostData
            .filter((post) => post.category.toLowerCase() === "review")
            .map((post) => (
              <ReviewPreview
                title={post.gameTitle}
                platform={post.platform}
                grade={post.grade}
              />
            ))}
          <p>View All Reviews</p> */}
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionHeader}>Recent Articles</h3>
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
      </div>
    </div>
  );
};

// IndexPageTemplate.propTypes = {
//   image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   title: PropTypes.string,
//   heading: PropTypes.string,
//   subheading: PropTypes.string,
//   mainpitch: PropTypes.object,
//   description: PropTypes.string,
//   intro: PropTypes.shape({
//     blurbs: PropTypes.array,
//   }),
// };

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const summary =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a ex neque. Nulla ac nulla consequat erat dictum convallis vitae sit amet nisl. Quisque fermentum purus sed egestas dictum. Cras rutrum, neque eget porta ornare, arcu velit iaculis dui, et vulputate nisl nisi vel orci. Vestibulum vitae sollicitudin nisl, id interdum tortor. Ut commodo magna id feugiat fringilla. Vestibulum ac auctor turpis, vel sodales arcu. Nam vel neque sed ipsum lacinia ullamcorper id quis turpis.";

  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
