import type { Portfolio } from "@portfolio/data";

type Basics = Portfolio["basics"];
type Skills = NonNullable<Portfolio["skills"]>;
type Projects = NonNullable<Portfolio["projects"]>;

export interface Contact {
  text: string;
  href: string;
  label: string;
}

export interface SkillLine {
  label: string;
  items: string[];
}

const strip = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export function getContacts(basics: Basics): Contact[] {
  const links = basics.links ?? {};
  return [
    basics.phone ? { text: basics.phone, href: `tel:${basics.phone}`, label: "Phone" } : null,
    { text: basics.email, href: `mailto:${basics.email}`, label: "Email" },
    links.linkedin ? { text: strip(links.linkedin), href: links.linkedin, label: "LinkedIn" } : null,
    links.github ? { text: strip(links.github), href: links.github, label: "GitHub" } : null,
    links.website ? { text: strip(links.website), href: links.website, label: "Website" } : null,
    links.blog ? { text: strip(links.blog), href: links.blog, label: "Blog" } : null
  ].filter((c): c is Contact => c !== null);
}

export function getSkillLines(skills: Skills | undefined): SkillLine[] {
  if (skills?.categories?.length) {
    return skills.categories.map(c => ({ label: c.label, items: c.items }));
  }
  return [
    skills?.primary?.length ? { label: "Core", items: skills.primary } : null,
    skills?.secondary?.length ? { label: "Frameworks & APIs", items: skills.secondary } : null,
    skills?.tooling?.length ? { label: "Tooling", items: skills.tooling } : null
  ].filter((s): s is SkillLine => s !== null);
}

// Resume PDF shows featured projects only (falls back to all if none flagged)
export function getPrintProjects(projects: Projects): Projects {
  const featured = projects.filter(p => p.featured);
  return featured.length ? featured : projects;
}
