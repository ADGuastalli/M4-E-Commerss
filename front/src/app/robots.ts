import Sitemap from "./sitemap";

export default function Robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/dashboard",
      },
    ],
    sitemap: Sitemap(),
  };
}
