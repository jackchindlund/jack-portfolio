import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/Jack_Chindlund_Resume.pdf",
        destination: "/resume/jack-chindlund-resume.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
