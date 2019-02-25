import React from 'react';
import { Link } from 'gatsby';

import './Nav.sass';

const Nav = () => (
  <div id="nav">
    <div id="name">
      <Link to="/">Julian Visser</Link>
    </div>

    <div id="links">
      <Link to="/#about" className="item">
        About
      </Link>
      <Link to="/blog" className="item item-with-border">
        Blog
      </Link>
    </div>
  </div>
);
export default Nav;
