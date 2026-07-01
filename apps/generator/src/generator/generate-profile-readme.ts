import type { Portfolio } from "@portfolio/data";

export interface ProfileReadmeGeneratorOptions {
  portfolio: Portfolio;
  portfolioUrl: string;
  resumeUrl: string;
}

const bullet = (line: string): string => `- ${line}`;

export const generateProfileReadme = ({
  portfolio: {
    basics: { fullName, email, links = {} },
    summary,
    skills: { primary = [], secondary = [], tooling = [] } = {},
    projects = [],
    languages = []
  },
  portfolioUrl,
  resumeUrl
}: ProfileReadmeGeneratorOptions) => {
  const activeProjects = projects.filter(({ status }) => status === "active");

  const aboutLines: string[] = [];

  if (summary) {
    aboutLines.push(...summary.lines);
  } else {
    aboutLines.push(
      `I'm **${fullName}**, a passionate Software Developer focused on building scalable applications and developer tooling.`
    );
  }

  const md = [
    `# Hello, world! 🌍`,
    ``,
    ...aboutLines,
    ``,
    `---`,
    ``,
    `## 👨🏻‍💻 About Me`,
    ``,
    bullet(`I build with **TypeScript**, **Node.js**, and modern web technologies`),
    bullet(`Interested in **DevOps**, system design, and automation`),
    bullet(`I care about clean architecture, DX, and long-term maintainability`),
    ``,
    `---`,
    ``,
    `## 🚀 Skills & Expertise`,
    ``,
    primary.length ? `**Frontend**` : null,
    primary.length ? primary.join(" · ") : null,
    ``,
    secondary.length ? `**Backend**` : null,
    secondary.length ? secondary.join(" · ") : null,
    ``,
    tooling.length ? `**Tooling & Infrastructure**` : null,
    tooling.length ? tooling.join(" · ") : null,
    ``,
    `---`,
    ``,
    `## 🔧 Currently Working On`,
    ``,
    activeProjects.length
      ? activeProjects
          .map(({ name, links }) =>
            bullet(
              links?.find(l => l.type === "github")
                ? `**${name}** — ${links!.find(l => l.type === "github")!.href}`
                : `**${name}**`
            )
          )
          .join("\n")
      : bullet(`Exploring new ideas and improving my tooling + portfolio`),
    ``,
    bullet(`Full experience: ${resumeUrl}`),
    ``,
    `---`,
    ``,
    `## 🌍 Languages`,
    ``,
    languages.length
      ? languages.map(({ name, level }) => bullet(`**${name}:** ${level}`)).join("\n")
      : bullet(`English: Professional working proficiency`),
    ``,
    `---`,
    ``,
    `## 🎓 Education & Professional Journey`,
    ``,
    bullet(`Resume: ${resumeUrl}`),
    links.linkedin ? bullet(`LinkedIn: ${links.linkedin}`) : null,
    ``,
    `---`,
    ``,
    `## 📬 Get in Touch`,
    ``,
    portfolioUrl ? bullet(`Portfolio: ${portfolioUrl}`) : null,
    email ? bullet(`[Email](mailto:${email})`) : null,
    links?.website ? bullet(`[Website](${links.website})`) : null,
    links.linkedin ? bullet(`[LinkedIn](${links.linkedin})`) : null,
    links?.github ? bullet(`[GitHub](${links.github})`) : null,
    links?.blog ? bullet(`[Blog](${links.blog})`) : null
  ].join("\n");

  return `${md.trim()}\n`;
};
