import React from 'react';
import { Link } from 'gatsby';
import ArrowSVG from '../ArrowSVG/ArrowSVG';

import './ArrowButton.sass';

const ArrowButton = props => (
  <div className="ArrowButton">
    <a href={'#' + props.next}>
      <div>
        <p>{props.next}</p>
        <ArrowSVG />
      </div>
    </a>
  </div>
);
export default ArrowButton;
