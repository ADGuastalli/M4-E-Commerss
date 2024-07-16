export default function Sitemap() {
  return [
    {
      url: "https://applezone.vercel.app/home",
      lastModified: new Date(),
      changeFrecuency: "Monthly",
      priority: "1.0",
    },
    {
      url: "https://applezone.vercel.app/register",
      lastModified: new Date(),
      changeFrecuency: "Monthly",
      priority: "0.9",
    },
    {
      url: "https://applezone.vercel.app/about",
      lastModified: new Date(),
      changeFrecuency: "Monthly",
      priority: "0.8",
    },
  ];
}
