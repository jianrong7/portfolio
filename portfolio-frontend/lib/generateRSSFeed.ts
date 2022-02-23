import { Feed } from "feed";
import fs from "fs";
import type { PostInterface } from "../types/post";

const generateRSSFeed = (posts: PostInterface[]) => {
  const baseUrl = "https://jianrong-portfolio.vercel.app";
  const author = {
    name: "Loh Jian Rong",
    email: "ipwnjianrong@gmail.com",
    link: "https://twitter.com/jrloh7",
  };

  // Construct a new Feed object
  const feed = new Feed({
    title: "Articles by Loh Jian Rong",
    description:
      "You can find me talking about my thoughts and learnings related to technology.",
    id: baseUrl,
    link: baseUrl,
    language: "en",
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
    },
    author,
    copyright: "All rights reserved 2022, Loh Jian Rong",
  });

  // Add each article to the feed
  posts.forEach((post) => {
    const {
      slug,
      frontmatter: { title, subtitle, date },
    } = post;
    const url = `${baseUrl}/blog/${slug}`;

    feed.addItem({
      title,
      id: url,
      link: url,
      description: subtitle,
      // content,
      author: [author],
      date: new Date(date),
    });
  });

  // Write the RSS output to a public file, making it accessible
  fs.writeFileSync("public/rss.xml", feed.rss2());
};

export default generateRSSFeed;
