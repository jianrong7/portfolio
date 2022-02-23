/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: "https://jianrong-portfolio.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 30000,
  robotsTxtOptions: {
    additionalSitemaps: ["https://jianrong-portfolio.vercel.app/sitemap-0.xml"],
  },
};

module.exports = config;
