import React from 'react';
import { Link } from 'gatsby';

import Layout from '../Layout/Layout';
import Nav from '../../components/Nav/Nav';

import rehypeReact from 'rehype-react';
import Photo from '../../components/Photo/Photo';

import './BlogPost.sass';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'rehype-image': Photo
  }
}).Compiler;

export default function BlogPostTemplate({ data }) {
  const post = data.markdownRemark;

  return (
    <Layout>
      <h2>{post.frontmatter.title}</h2>
      <p className="date">Published: {post.frontmatter.date}</p>
      <div id="BlogPostContent">{renderAst(post.htmlAst)}</div>
    </Layout>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        path
        title
        date
      }
    }
  }
`;
