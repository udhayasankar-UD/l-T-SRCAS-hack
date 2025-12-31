import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   async redirects() {
    return [
      {
        source: "/aftermovie",
        destination: "https://www.youtube.com/watch?v=xKLlWAJvdDQ",
        permanent: false,
      },
      {
        source: "/prospectus",
        destination:
          "https://drive.google.com/file/d/1Zu56vhpSGQQDViqBLSbrVxeTxNf2F9Wl/view",
        permanent: false,
      },
      {
        source: "/chat",
        destination:
          "https://discord.com/invite/NTueHjdPn8",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
