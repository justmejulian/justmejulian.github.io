import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Layout from '../layouts/Layout/Layout';
import ArrowButton from '../components/ArrowButton/ArrowButton';
import ArrowSVG from '../components/ArrowSVG/ArrowSVG';
import GithubSVG from '../components/GithubSVG/GithubSVG';
import LinkedinSVG from '../components/LinkedinSVG/LinkedinSVG';

import SEO from '../components/seo';

import '../style/index.sass';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`justmejulian`, `portfolio`, `gatsby`, `application`, `react`]}
    />

    <div id="backButton">
      <AnchorLink href="#header" id="backButtonContent">
        <ArrowSVG />
        <ArrowSVG />
        <p>Top</p>
      </AnchorLink>
    </div>

    <div id="header" className="container">
      <div id="titles">
        <h1>Julian Visser</h1>
        <h4>Computer Scientist</h4>
        <div className="socialContainer">
          <AnchorLink href="https://github.com/justmejulian">
            <GithubSVG />
          </AnchorLink>
          <AnchorLink href="https://www.linkedin.com/in/julian-visser-8b4b21180/">
            <LinkedinSVG />
          </AnchorLink>
        </div>
      </div>
      <ArrowButton next="about" />
    </div>
    <div id="about" className="container">
      <div className="content">
        <h2>About</h2>
        <p>Hi my name is Julian.</p>
        <p>
          I am AnchorLink last year Computer Science Student at the ZHAW school
          of engineering.
        </p>
        <p>
          I am always trying and learning new things in and outside the office.
          I have a love for design and an intrinsic need to know how things
          work.
        </p>
        <p>
          If you want to know more about me check out my{' '}
          <AnchorLink href="https://github.com/justmejulian/resume/blob/master/resume/resume.pdf">
            CV
          </AnchorLink>
          .
        </p>
      </div>
      <ArrowButton next="portfolio" />
    </div>
    <div id="portfolio" className="container">
      <h2>Portfolio</h2>
      <h4 id="portfolioDescription">Things I have built.</h4>
      <div className="projects">
        <AnchorLink
          href="https://github.com/zhaw-timetable/zhawo"
          className="project project-with-border"
        >
          <h4>zhaWo</h4>
          <img
            src="https://github.com/zhaw-timetable/zhawo/blob/master/docs/assets/zhawoLogo.png?raw=true"
            alt="zhaWo Logo"
          />
          <p>Progressive web app for students of the ZHAW.</p>
        </AnchorLink>
        <AnchorLink
          href="https://github.com/justmejulian"
          className="project project-with-border"
        >
          <h4>Github</h4>
          <GithubSVG />
          <p>View all my projects on Github.</p>
        </AnchorLink>
        <AnchorLink
          href="https://github.com/justmejulian/markdoc"
          className="project"
        >
          <h4>markdoc</h4>
          <img
            src="https://github.com/justmejulian/markdoc/blob/master/docs/logo/png/Element%2010@3x.png?raw=true"
            alt="markdoc Logo"
          />
          <p>Beautiful markdown editor for academic papers.</p>
        </AnchorLink>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
