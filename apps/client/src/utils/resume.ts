import type { Portfolio, Role, SkillItem } from "@portfolio/data";

type Basics = Portfolio["basics"];
type Skills = NonNullable<Portfolio["skills"]>;
type Projects = NonNullable<Portfolio["projects"]>;
type Publication = NonNullable<Portfolio["publications"]>[number];

export interface Contact {
  text: string;
  href: string;
  label: string;
}

export interface SkillLine {
  label: string;
  items: SkillItem[];
}

// Space-separated role tags for the client-side role filter's data-roles attribute
export const rolesAttr = (roles?: Role[]): string | undefined => (roles?.length ? roles.join(" ") : undefined);

const strip = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export const getContacts = (basics: Basics, options: { academic?: boolean } = {}): Contact[] => {
  const { academic = false } = options;
  const links = basics.links ?? {};
  return [
    basics.phone ? { text: basics.phone, href: `tel:${basics.phone}`, label: "Phone" } : null,
    { text: basics.email, href: `mailto:${basics.email}`, label: "Email" },
    links.linkedin ? { text: strip(links.linkedin), href: links.linkedin, label: "LinkedIn" } : null,
    links.github ? { text: strip(links.github), href: links.github, label: "GitHub" } : null,
    links.website ? { text: strip(links.website), href: links.website, label: "Website" } : null,
    academic && links.orcid ? { text: strip(links.orcid), href: links.orcid, label: "ORCID" } : null,
    academic && links.blog ? { text: strip(links.blog), href: links.blog, label: "Blog" } : null
  ].filter((c): c is Contact => c !== null);
};

export const getSkillLines = (skills: Skills | undefined): SkillLine[] =>
  (skills?.categories ?? []).map(c => ({ label: c.label, items: c.items }));

// Resume PDF shows featured projects only (falls back to all if none flagged)
export const getPrintProjects = (projects: Projects): Projects => {
  const featured = projects.filter(p => p.featured);
  return featured.length ? featured : projects;
};

export const pubHref = (p: Publication): string | undefined => (p.doi ? `https://doi.org/${p.doi}` : p.url);

// Split the byline around the owner's name so it can be bolded.
export const splitAuthors = (p: Publication): [string, string, string] => {
  if (!p.highlight) return [p.authors, "", ""];
  const i = p.authors.indexOf(p.highlight);
  if (i === -1) return [p.authors, "", ""];
  return [p.authors.slice(0, i), p.highlight, p.authors.slice(i + p.highlight.length)];
};
