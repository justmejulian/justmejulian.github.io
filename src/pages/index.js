import SmoothScroll from 'smooth-scroll';

import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../layouts/Layout/Layout';
import ArrowButton from '../components/ArrowButton/ArrowButton';
import ArrowSVG from '../components/ArrowSVG/ArrowSVG';
import SEO from '../components/seo';

import '../style/index.sass';

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800
});

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div id="backButton">
      <a href="#header" id="backButtonContent">
        <ArrowSVG />
        <ArrowSVG />
        <p>Top</p>
      </a>
    </div>

    <div id="header">
      <div id="titles">
        <h1>Julian Visser</h1>
        <h4>Computer Scientist</h4>
      </div>
      <ArrowButton next="about" />
    </div>
    <div id="about">
      <div className="content">
        <h2>About</h2>
        <p>
          I am a last year Computer Science Student, who is always trying and
          learning new things in and outside the office. I have a love for
          design and an intrinsic need to know how things work.
        </p>
      </div>
      <ArrowButton next="portfolio" />
    </div>

    <div id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        <div className="project" />
        <div className="project" />
        <div className="project" />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
