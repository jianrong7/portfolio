/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: true,
  },
  // swcMinify: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/jianrong7",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
