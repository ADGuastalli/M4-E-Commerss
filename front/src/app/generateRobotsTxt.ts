import fs from "fs";
import Robots from "./robots";

function generateRobotsTxt() {
  const robotsContent = Robots();
  fs.writeFileSync("./robots.ts", robotsContent);
}

generateRobotsTxt();