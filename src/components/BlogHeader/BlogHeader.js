import React from 'react';
import { Link } from 'gatsby';

import './BlogHeader.sass';
import Nav from '../Nav/Nav';

const BlogHeader = () => (
  <div id="blogHeader">
    <h1>
      <Link to="/">Julian Visser</Link>
    </h1>
    <Nav />
  </div>
);
export default BlogHeader;
