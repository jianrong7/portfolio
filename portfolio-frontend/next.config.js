/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts)x?$/] },
      use: ["@svgr/webpack"],
    });
    return config;
  },
  // swcMinify: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/jianrong7",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/jianrong7_",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/jianrong7/",
        permanent: true,
      },
    ];
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
