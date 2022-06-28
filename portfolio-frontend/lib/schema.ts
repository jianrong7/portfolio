const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Loh Jian Rong",
  email: "hello@jianrong.dev",
  url: "https://jianrong.dev",
  image: "https://jianrong.dev/profile.jpg",
  sameAs: [
    "https://twitter.com/jianrong7_",
    "https://www.linkedin.com/in/jianrong7/",
  ],
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://jianrong.dev/blog",
  },
  headline: "Jian Rong's Blog",
  image: "https://jianrong.dev/profile.jpg",
  author: personSchema,
  description:
    "Read Jian Rong's articles on frontend development, backend development, or anything in between.",
  genre: [
    "technology",
    "software",
    "frontend",
    "backend",
    "software engineering",
  ],
};

export { personSchema, blogSchema };
