const nextConfig = {
  basePath: '',
  assetPrefix: '',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "QmVMVzGk8cFuUa26yreqKzofhKpwCnCnuYYkxqkd7AhyRp",
      },
    ],
  },
};

module.exports = nextConfig;

