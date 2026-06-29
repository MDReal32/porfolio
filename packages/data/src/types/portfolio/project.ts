import type { ProjectLink } from "./project-link";
import type { ProjectStatus } from "./project-status";

export interface Project {
  name: string;
  tagline: string; // 1-line value
  description?: string;

  highlights?: string[]; // 2–4 bullets: decisions/impact
  stack?: string[]; // keep short

  links?: ProjectLink[];
  status: ProjectStatus;
  featured?: boolean; // for homepage ordering
}
