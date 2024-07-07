export default function Sitemap() {
  return [
    {
      url: "http://localhost:3001/home",
      lastModified: new Date(),
      changeFrecuency: "Monthly",
      priority: "1.0",
    },
    {
      url: "http://localhost:3001/register",
      lastModified: new Date(),
      changeFrecuency: "Monthly",
      priority: "0.9",
    },
    {
      url: "http://localhost:3001/about",
      lastModified: new Date(),
      changeFrecuency: "Monthly",
      priority: "0.8",
    },
  ];
}
