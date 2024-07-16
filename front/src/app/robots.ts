import Sitemap from "./sitemap";

export default function Robots() {
  const sitemapUrls = Sitemap();
  let robotsContent = "";

  robotsContent += "User-agent: *\n";
  robotsContent += "Allow: /home\n";
  robotsContent += "Disallow: /dashboard\n\n";

  sitemapUrls.forEach((url) => {
    robotsContent += `Sitemap: ${url}\n`;
  });

  return robotsContent;
}
