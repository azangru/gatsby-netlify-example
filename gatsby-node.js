// const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const authorPageTemplate = path.resolve('src/templates/author-page-template.js');
const bookPageTemplate = path.resolve('src/templates/book-page-template.js');

function getPageTemplate(slug) {
  if (/^\/books/.test(slug)) {
    return bookPageTemplate;
  } else if (/^\/authors/.test(slug)) {
    return authorPageTemplate;
  }
}

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
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(edge => {
      const slug = edge.node.fields.slug;
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        component: getPageTemplate(slug),
        // additional data can be passed via context
        context: {
          id,
          slug
        },
      });
    });

  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
