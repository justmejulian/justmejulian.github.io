import React from 'react';
import { Link } from 'gatsby';

import './Nav.sass';

const Nav = () => (
  <div id="nav">
    <Link to="/" className="item">
      Home
    </Link>
    <Link to="/about" className="item item-with-border">
      About
    </Link>
    <Link to="/contact" className="item item-with-border">
      Contact
    </Link>
    <Link to="/blog" className="item item-with-border item-last">
      Blog
    </Link>
  </div>
);
export default Nav;
