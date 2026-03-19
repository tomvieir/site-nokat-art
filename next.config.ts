import type { NextConfig } from "next";

const repoName = "site-nokat-art";
const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const configuredBasePath = process.env.SITE_BASE_PATH;
const basePath =
  configuredBasePath !== undefined
    ? configuredBasePath === "__ROOT__"
      ? ""
      : configuredBasePath
    : isGithubPages
      ? `/${repoName}`
      : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
