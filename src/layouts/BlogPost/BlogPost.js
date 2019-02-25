import React from 'react';
import { Link } from 'gatsby';

import Layout from '../Layout/Layout';
import Nav from '../../components/Nav/Nav';

import './BlogPost.sass';

export default function BlogPostTemplate({ data }) {
  const post = data.markdownRemark;

  return (
    <Layout>
      <h2>{post.frontmatter.title}</h2>
      <p className="date">Published: {post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`;
