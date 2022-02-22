import { GetServerSideProps } from "next";
import fs from "fs";

export default function Sitemap() {}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = "https://jianrong-portfolio.vercel.app";

  const staticPages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "_app.tsx",
        "_document.tsx",
        "_error.tsx",
        "sitemap.xml.ts",
        "index.tsx",
      ].includes(staticPage);
    })
    .map(
      (staticPagePath) => `${baseUrl}/${staticPagePath.replace(".tsx", "")}`
    );

  const blogPages = fs
    .readdirSync("content")
    .map((fileName) => fileName.replace(".mdx", ""))
    .map((filePath) => `${baseUrl}/${filePath}`);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://jianrong-portfolio.vercel.app/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://jianrong-portfolio.vercel.app/blog/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      ${staticPages
        .map(
          (url) =>
            `<url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>`
        )
        .join("")}
      ${blogPages
        .map(
          (url) =>
            `<url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>`
        )
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};
