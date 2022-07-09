export interface WorkContentInterface {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  appLink: string;
  image?: { src: string; height: number; width: number; alt: string };
}

const driveSg = {
  title: "DriveSG",
  description:
    "Mobile quiz application for drivers-to-be to ace their theory tests. Available on Google Play Store.",
  technologies: ["React Native", "Tesseract.js", "Firebase"],
  githubLink: "https://github.com/jianrong7/drivesg",
  appLink:
    "https://play.google.com/store/apps/details?id=com.jianrong7.drivesg",
  // image: {
  //   src: "/drivesg/drivesg_banner.png",
  //   height: 341,
  //   width: 700,
  //   alt: "DriveSG Banner",
  // },
};

const traceify = {
  title: "Traceify",
  description:
    "Web application for music lovers to monitor their music taste, TraceTogether-style. Deployed on Heroku.",
  technologies: ["React", "Tailwind CSS", "Spotify API", "Heroku", "Express"],
  githubLink: "https://github.com/jianrong7/traceify-client",
  appLink: "https://traceify-client.netlify.app/",
};

const cryptoWatchlist = {
  title: "Web3 Watchlist",
  description:
    "Watchlist for crypto and NFT enthusiasts to monitor their assets. Dockerized and deployed on GCP.",
  technologies: [
    "Next.js",
    "TypeScript",
    "CoinGecko API",
    "Redis",
    "Docker",
    "Google Cloud Platform",
  ],
  githubLink: "https://github.com/jianrong7/crypto-ts",
  appLink: "https://crypto-docker-nypoewfveq-uc.a.run.app/",
};
export { driveSg, traceify, cryptoWatchlist };
