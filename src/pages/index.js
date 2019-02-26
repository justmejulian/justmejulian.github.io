import SmoothScroll from 'smooth-scroll';

import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../layouts/Layout/Layout';
import ArrowButton from '../components/ArrowButton/ArrowButton';
import ArrowSVG from '../components/ArrowSVG/ArrowSVG';
import GithubSVG from '../components/GithubSVG/GithubSVG';
import LinkedinSVG from '../components/LinkedinSVG/LinkedinSVG';

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
        <div className="socialContainer">
          <a href="https://github.com/justmejulian">
            <GithubSVG />
          </a>
          <a href="https://www.linkedin.com/in/julian-visser-8b4b21180/">
            <LinkedinSVG />
          </a>
        </div>
      </div>
      <ArrowButton next="about" />
    </div>
    <div id="about">
      <div className="content">
        <h2>About</h2>
        <p>Hi my name is Julian.</p>
        <p>
          I am a last year Computer Science Student at the ZHAW school of
          engineering.
        </p>
        <p>
          I am always trying and learning new things in and outside the office.
          I have a love for design and an intrinsic need to know how things
          work.
        </p>
        <p>
          If you want to know more about me check out my{' '}
          <a href="https://github.com/justmejulian/resume/blob/master/resume/resume.pdf">
            CV
          </a>
          .
        </p>
      </div>
      <ArrowButton next="portfolio" />
    </div>
    <div id="portfolio">
      <h2>Portfolio</h2>
      <h4 id="portfolioDescription">Things I have built.</h4>
      <div className="projects">
        <a
          href="https://github.com/zhaw-timetable/zhawo"
          className="project project-with-border"
        >
          <h4>zhaWo</h4>
          <img
            src="https://github.com/zhaw-timetable/zhawo/blob/master/docs/assets/zhawoLogo.png?raw=true"
            alt="zhaWo Logo"
          />
          <p>Progressive web app for students of the ZHAW.</p>
        </a>
        <a
          href="https://github.com/justmejulian"
          className="project project-with-border"
        >
          <h4>Github</h4>
          <GithubSVG />
          <p>View all my projects on Github.</p>
        </a>
        <a href="https://github.com/justmejulian/markdoc" className="project">
          <h4>markdoc</h4>
          <img
            src="https://github.com/justmejulian/markdoc/blob/master/docs/logo/png/Element%2010@3x.png?raw=true"
            alt="markdoc Logo"
          />
          <p>Beautiful markdown editor for academic papers.</p>
        </a>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
