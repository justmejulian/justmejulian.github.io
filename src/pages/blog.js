import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts/Layout/Layout';
import BlogHeader from '../components/BlogHeader/BlogHeader';

const BlogPage = ({ data }) => (
  <Layout>
    {console.log(data)}
    <BlogHeader />
    <h1>Blog</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h2>{post.node.frontmatter.title}</h2>
        <Link to={post.node.frontmatter.path}>Read More</Link>
      </div>
    ))}
  </Layout>
);

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
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
