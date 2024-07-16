import Sitemap from "./sitemap";

export default function Robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/home",
        disallow: "/dashboard",
      },
    ],
    sitemap: Sitemap(),
  };
}
