/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

// So that blog posts are passed and linked
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('src/layouts/BlogPost/BlogPost.js');
  return graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              html
              id
              frontmatter {
                title
                path
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
      createPage({
        path: post.node.frontmatter.path,
        component: postTemplate
      });
    });
  });
};
