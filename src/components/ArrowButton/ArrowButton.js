import React from 'react';
import { Link } from 'gatsby';
import ArrowSVG from '../ArrowSVG/ArrowSVG';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './ArrowButton.sass';

const ArrowButton = props => (
  <div className="ArrowButton">
    <AnchorLink href={'#' + props.next}>
      <div>
        <p>{props.next}</p>
        <ArrowSVG />
      </div>
    </AnchorLink>
  </div>
);
export default ArrowButton;
