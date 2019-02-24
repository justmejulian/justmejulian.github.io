import React from 'react';
import { Link } from 'gatsby';

import Layout from '../Layout/Layout';
import Nav from '../../components/Nav/Nav';
import BlogHeader from '../../components/BlogHeader/BlogHeader';

import './BlogPost.sass';

export default function BlogPostTemplate({ data }) {
  const post = data.markdownRemark;

  return (
    <Layout>
      <BlogHeader />

      <main>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </main>
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
