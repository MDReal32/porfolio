import type { ProjectLink } from "./project-link";

export interface Project {
  name: string;
  tagline: string; // 1-line value
  description?: string;

  highlights?: string[]; // 2–4 bullets: decisions/impact
  stack?: string[]; // keep short

  links?: ProjectLink[];
  featured?: boolean; // for homepage ordering
}
