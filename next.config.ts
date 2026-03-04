import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },

  //temporary redirect for recruiters
  async redirects() {
    return [
      {
        source: "/fr/dev",
        destination: "/fr",
        permanent: true,
      },
      {
        source: "/dev",
        destination: "/fr",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
