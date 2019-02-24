import React from 'react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import './LandingHeader.sass';
import Nav from '../Nav/Nav';

const LandingHeader = ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        fileName: file(relativePath: { eq: "me_light.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div id="header">
        {console.log(data)}
        <div id="headerLeft">
          <div id="headerTitleContainer">
            <h1>
              <Link to="/">Julian Visser</Link>
            </h1>
            <h2>Computer Scientist</h2>
          </div>

          <Nav />
        </div>
        <div id="headerRight">
          <div id="photo">
            <Img fluid={data.fileName.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    )}
  />
);

export default LandingHeader;
