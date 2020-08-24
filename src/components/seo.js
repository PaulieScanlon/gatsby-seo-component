import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export const Seo = ({
  title,
  description,
  keywords,
  url,
  ogImage,
  favicon,
  lang,
  type,
  page,
  path
}) => {
  return (
    <Helmet>
      <title>{`${title} | ${page}`}</title>
      <html lang={lang} />
      <meta name="description" content={description} />
      <meta name="image" content={`${url}/${ogImage}`} />
      <meta name="image:alt" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />

      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${url}/${favicon.ico}`}
      />

      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${url}/${favicon.sm}`}
      />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${url}/${favicon.lg}`}
      />

      {/* Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={page} />
      <meta property="og:url" content={`${url}${path}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}/${ogImage}`} />
      <meta property="og:image:alt" content={description}></meta>

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={page} />
      <meta name="twitter:url" content={`${url}${path}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}/${ogImage}`} />
      <meta name="twitter:image:alt" content={description}></meta>
    </Helmet>
  );
};

Seo.propTypes = {
  /** The site title */
  title: PropTypes.string.isRequired,
  /** The site description */
  description: PropTypes.string.isRequired,
  /** Keywords to use in meta keywords */
  keywords: PropTypes.arrayOf(PropTypes.string),
  /** The site URL */
  url: PropTypes.string.isRequired,
  /** Image url to use for opengraph image */
  ogImage: PropTypes.string,
  /** Favicon image urls**/
  favicon: PropTypes.shape({
    ico: PropTypes.string,
    sm: PropTypes.string,
    lg: PropTypes.string
  }),
  /** Lang to use as meta lang */
  lang: PropTypes.string.isRequired,
  /** The type of meta - useful for Facebook */
  type: PropTypes.oneOf(['website', 'article']).isRequired,
  /** The page name */
  page: PropTypes.string.isRequired,
  /** The path to the page */
  path: PropTypes.string.isRequired
};
