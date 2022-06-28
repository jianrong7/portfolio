/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: "https://jianrong.dev",
  generateRobotsTxt: true,
  sitemapSize: 30000,
  exclude: ["/500", "/404"],
  // robotsTxtOptions: {
  //   additionalSitemaps: ["https://jianrong.dev/sitemap-0.xml"],
  // },
};

module.exports = config;
