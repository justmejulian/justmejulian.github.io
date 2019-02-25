import React from 'react';
import { StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const ImageMe = ({ data }) => (
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
    render={data => <Img fluid={data.fileName.childImageSharp.fluid} />}
  />
);

export default ImageMe;
