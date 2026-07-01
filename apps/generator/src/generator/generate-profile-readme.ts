import { languageLevelColors, skillBadges as SKILL_BADGES, type Portfolio, type SkillBadgeStyle } from "@portfolio/data";

export interface ProfileReadmeGeneratorOptions {
  portfolio: Portfolio;
  portfolioUrl: string;
  resumeUrl: string;
}

const DEFAULT_BADGE: SkillBadgeStyle = { color: "4A5568" };

const escapeBadgeSegment = (segment: string): string =>
  encodeURIComponent(segment.replace(/-/g, "--").replace(/_/g, "__").replace(/ /g, "_"));

const badgeUrl = (segments: string[], color: string, style: Omit<SkillBadgeStyle, "color"> = {}): string => {
  const path = [...segments.map(escapeBadgeSegment), color].join("-");
  const query = new URLSearchParams({ style: "for-the-badge" });
  if (style.logo) query.set("logo", style.logo);
  if (style.logo) query.set("logoColor", style.logoColor ?? "white");
  return `https://img.shields.io/badge/${path}?${query.toString()}`;
};

const badge = (label: string, style: SkillBadgeStyle = DEFAULT_BADGE): string =>
  `![${label}](${badgeUrl([label], style.color, style)})`;

const linkBadge = (label: string, href: string, style: SkillBadgeStyle = DEFAULT_BADGE): string =>
  `[${badge(label, style)}](${href})`;

const skillBadges = (skills: string[]): string => skills.map(skill => badge(skill, SKILL_BADGES[skill])).join(" ");

const languageBadge = ({ name, level }: { name: string; level: string }): string =>
  `![${name}](${badgeUrl([name, level], languageLevelColors[level] ?? "9f9f9f")})`;

const typingSvg = (lines: string[]): string => {
  const longestLine = Math.max(...lines.map(line => line.length), 10);
  const width = Math.min(900, Math.max(320, longestLine * 12 + 40));

  const params = new URLSearchParams({
    font: "Fira Code",
    size: "20",
    pause: "1000",
    color: "58A6FF",
    center: "true",
    vCenter: "true",
    width: String(width),
    lines: lines.join(";")
  });
  return `<img src="https://readme-typing-svg.demolab.com/?${params.toString()}" alt="Typing SVG" />`;
};

const githubUsername = (githubUrl?: string): string | undefined => {
  if (!githubUrl) return undefined;
  try {
    return new URL(githubUrl).pathname.replace(/^\/+|\/+$/g, "").split("/")[0] || undefined;
  } catch {
    return undefined;
  }
};

const bullet = (line: string): string => `- ${line}`;

export const generateProfileReadme = ({
  portfolio: {
    basics: { fullName, email, links = {} },
    summary,
    skills: { categories = [] } = {},
    projects = [],
    languages = []
  },
  portfolioUrl,
  resumeUrl
}: ProfileReadmeGeneratorOptions) => {
  const activeProjects = projects.filter(({ status }) => status === "active");
  const username = githubUsername(links.github);

  const aboutLines: string[] = [];

  if (summary) {
    aboutLines.push(...summary.lines);
  } else {
    aboutLines.push(
      `I'm **${fullName}**, a passionate Software Developer focused on building scalable applications and developer tooling.`
    );
  }

  const md = [
    `<div align="center">`,
    ``,
    `# Hello, world! 🌍`,
    ``,
    typingSvg(["Software Engineer"]),
    ``,
    `</div>`,
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
    ...categories.flatMap(({ label, items }) => [`**${label}**`, `<br />${skillBadges(items)}`, ``]),
    `---`,
    ``,
    `## 🔧 Currently Working On`,
    ``,
    activeProjects.length
      ? activeProjects
          .map(({ name, links: projectLinks }) => {
            const githubLink = projectLinks?.find(l => l.type === "github");
            return githubLink
              ? linkBadge(name, githubLink.href, { color: "181717", logo: "github" })
              : badge(name);
          })
          .join(" ")
      : bullet(`Exploring new ideas and improving my tooling + portfolio`),
    ``,
    linkBadge("Full experience", resumeUrl, { color: "2563EB" }),
    ``,
    `---`,
    ``,
    `## 🌍 Languages`,
    ``,
    languages.length ? languages.map(languageBadge).join(" ") : badge("English", { color: "007ec6" }),
    ``,
    `---`,
    ``,
    `## 🎓 Education & Professional Journey`,
    ``,
    linkBadge("Resume", resumeUrl, { color: "2563EB" }),
    links.linkedin ? linkBadge("LinkedIn", links.linkedin, { color: "0A66C2", logo: "linkedin" }) : null,
    ``,
    `---`,
    ``,
    `## 📬 Get in Touch`,
    ``,
    `<div align="center">`,
    ``,
    [
      portfolioUrl ? linkBadge("Portfolio", portfolioUrl, { color: "2563EB", logo: "googlechrome" }) : null,
      email ? linkBadge("Email", `mailto:${email}`, { color: "EA4335", logo: "gmail" }) : null,
      links?.website ? linkBadge("Website", links.website, { color: "2563EB", logo: "googlechrome" }) : null,
      links.linkedin ? linkBadge("LinkedIn", links.linkedin, { color: "0A66C2", logo: "linkedin" }) : null,
      links?.github ? linkBadge("GitHub", links.github, { color: "181717", logo: "github" }) : null,
      links?.blog ? linkBadge("Blog", links.blog, { color: "000000", logo: "notion" }) : null
    ]
      .filter(Boolean)
      .join(" "),
    ``,
    `</div>`,
    username ? `` : null,
    username ? `---` : null,
    username ? `` : null,
    username
      ? `<div align="center">\n\n![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&count_private=true)\n![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true)\n\n![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true)\n\n</div>`
      : null
  ]
    .filter(line => line !== null)
    .join("\n");

  return `${md.trim()}\n`;
};
