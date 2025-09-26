import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://bsyufmtdphmorrritvyq.supabase.co/**")],
    domains: ["lh3.googleusercontent.com"],
  },
};

export default nextConfig;
