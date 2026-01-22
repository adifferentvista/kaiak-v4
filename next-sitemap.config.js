/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kaiak.io',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './public',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
  },
  // Exclude any pages you don't want indexed
  exclude: ['/api/*'],
}