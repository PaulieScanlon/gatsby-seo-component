import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { Seo } from '../components/seo';
import { useSiteMetadata } from '../utils/useSiteMetadata';

const AboutPage = () => {
  const {
    site: {
      siteMetadata: {
        title,
        description,
        keywords,
        url,
        ogImage,
        favicon,
        lang
      }
    }
  } = useSiteMetadata();

  return (
    <Fragment>
      <Seo
        title={title}
        description={description}
        keywords={keywords}
        url={url}
        ogImage={ogImage}
        favicon={favicon}
        lang={lang}
        type="website"
        page="About Me"
        path="/about"
      />
      <Link to="/">Home</Link>
      <h1>This is about.js</h1>
      ...
    </Fragment>
  );
};

export default AboutPage;
