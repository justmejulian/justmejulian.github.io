import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts/Layout/Layout';
import LandingHeader from '../components/LandingHeader/LandingHeader';
import SEO from '../components/seo';

import '../style/main.sass';

const IndexPage = () => (
  <Layout>
    <LandingHeader />
    <main>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <p>
        I am a last year Computer Science Student, who is always trying and
        learning new things in and outside the office. I have a love for design
        and an intrinsic need to know how things work.
      </p>
    </main>
  </Layout>
);

export default IndexPage;
