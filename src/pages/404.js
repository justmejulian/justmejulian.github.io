import React from 'react';

import Layout from '../layouts/layout/layout';
import BlogHeader from '../components/BlogHeader/BlogHeader';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <BlogHeader />
    <main>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </main>
  </Layout>
);

export default NotFoundPage;
