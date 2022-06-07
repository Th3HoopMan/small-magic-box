import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
const SEO = ({ customTitle, customDescription, customImage = null, article = false }) => {
  const { pathname } = useLocation();
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          titleTemplate
          description
          url
          image
          twitterUsername
        }
      }
    }
  `);

  const {
    title,
    titleTemplate,
    description,
    url,
    image,
    twitterUsername,
  } = data.site.siteMetadata;

  let template = titleTemplate;
  if (!customTitle) {
    template = "Video Game News & Reviews | CantPause";
  } else {
    template = `${customTitle} | CantPause`
  }

  const seo = {
    title: customTitle || title,
    description: customDescription || description,
    image: `${url}${customImage || image}`,
    url: `${url}${pathname}`,
  };
  return (
    <Helmet title={seo.title} titleTemplate={template}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};
export default SEO;
