import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts/Layout/Layout';

import '../style/blog.sass';

const BlogPage = ({ data }) => (
  <Layout>
    <h2>Blog</h2>
    <div id="posts">
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
          <Link id="more" to={post.node.frontmatter.path}>
            Read More
          </Link>
        </div>
      ))}
    </div>
  </Layout>
);

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          id
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`;
export default BlogPage;
