import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { Seo } from '../components/seo';
import { useSiteMetadata } from '../utils/useSiteMetadata';

const NotFoundPage = () => {
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
        page="Not Found"
        path=""
      />
      <h1>This is 404.js</h1>
      <p>
        Perhaps you're looking for
        <span role="img" aria-label="Backhand Index Pointing Down">
          👇
        </span>
      </p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NotFoundPage;
