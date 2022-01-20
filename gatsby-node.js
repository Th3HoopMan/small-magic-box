const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
              category
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    const postsPerPage = 2;

    // Create articles pages
    const articles = posts.filter((post) => {
      const category = post.node.frontmatter.category;
      return !!category && category !== "Review";
    });
   
    const numArticlePages = Math.ceil(articles.length / postsPerPage);
    Array.from({ length: numArticlePages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/articles/` : `/articles/${i + 1}`,
        component: path.resolve("./src/templates/articles-page.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numArticlePages,
          currentPage: i + 1,
        },
      });
    });

    // Create reviews pages
    const reviews = posts.filter((post) => {
      const category = post.node.frontmatter.category;
      return !!category && category === "Review";
    });
    const numReviewPages = Math.ceil(reviews.length / postsPerPage);
    Array.from({ length: numReviewPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/reviews/` : `/reviews/${i + 1}`,
        component: path.resolve("./src/templates/reviews-page.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numReviewPages,
          currentPage: i + 1,
        },
      });
    });

    posts.forEach((edge) => {
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach((edge) => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
