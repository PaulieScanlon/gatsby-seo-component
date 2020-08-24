import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { Seo } from '../components/seo';
import { useSiteMetadata } from '../utils/useSiteMetadata';

const IndexPage = () => {
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
        page="Home"
        path=""
      />
      <Link to="/about">About Me</Link>
      <h1>This is index.js</h1>
      ...
    </Fragment>
  );
};

export default IndexPage;
