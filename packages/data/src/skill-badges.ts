import type { SkillBadgeStyle } from "./types/skill-badge";

export const skillBadges: Record<string, SkillBadgeStyle> = {
  TypeScript: { color: "3178C6", logo: "typescript" },
  JavaScript: { color: "F7DF1E", logo: "javascript", logoColor: "black" },
  "Node.js": { color: "339933", logo: "nodedotjs" },
  React: { color: "61DAFB", logo: "react", logoColor: "black" },
  NestJS: { color: "E0234E", logo: "nestjs" },
  GraphQL: { color: "E10098", logo: "graphql" },
  "Vue.js (2/3)": { color: "4FC08D", logo: "vuedotjs" },
  Docker: { color: "2496ED", logo: "docker" },
  Kubernetes: { color: "326CE5", logo: "kubernetes" },
  Git: { color: "F05032", logo: "git" },
  "CI/CD": { color: "2088FF", logo: "githubactions" },
  Ansible: { color: "EE0000", logo: "ansible" },
  Python: { color: "3776AB", logo: "python" },
  Bun: { color: "000000", logo: "bun" },
  "Express.js": { color: "000000", logo: "express" },
  Django: { color: "092E20", logo: "django" },
  Redux: { color: "764ABC", logo: "redux" },
  TailwindCSS: { color: "06B6D4", logo: "tailwindcss" },
  "Material UI": { color: "007FFF", logo: "mui" },
  "React Router": { color: "CA4245", logo: "reactrouter" },
  Storybook: { color: "FF4785", logo: "storybook" },
  GitHub: { color: "181717", logo: "github" },
  Jenkins: { color: "D24939", logo: "jenkins" }
};

export const languageLevelColors: Record<string, string> = {
  Native: "4c1",
  C2: "4c1",
  C1: "97ca00",
  B2: "007ec6",
  B1: "dfb317"
};
