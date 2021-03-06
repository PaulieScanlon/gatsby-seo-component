module.exports = {
  siteMetadata: {
    title: 'Mr Website',
    description: 'A website about Mr Website',
    keywords: ['React', 'Gatsby', 'JAMStack'],
    url: 'https://gatsby-seo-component.netlify.app',
    ogImage: 'images/og-image.jpg',
    favicon: {
      ico: 'images/favicon.ico',
      sm: 'images/favicon-16x16.png',
      lg: 'images/favicon-32x32.png'
    },
    lang: `en`
  },
  plugins: [`gatsby-plugin-react-helmet`]
};
