import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

import { portfolio } from "../data/portfolio";
import { generateProfileReadme } from "../generator/generate-profile-readme";

const readme = generateProfileReadme({
  portfolio: portfolio,
  portfolioUrl: "https://mdreal.org",
  resumeUrl: "https://mdreal.org/resume"
});

await mkdir(resolve(".generated/profile"), { recursive: true });
await writeFile(resolve(".generated/profile/README.md"), readme);
