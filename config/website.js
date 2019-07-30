const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Ngalam Backend Community', // Navigation and Site Title
  siteTitleAlt: 'NBC', // Alternative Site title for SEO
  siteTitleShort: 'NBC', // short_name for manifest
  siteHeadline: 'Express Your Feeling With Code', // Headline for schema.org JSONLD
  siteUrl: 'http://ngalambackend.org', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'NBC - Ngalam Backend Community',
  author: 'Imam Nawawi', // Author for schema.org JSONLD

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
