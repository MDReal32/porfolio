import type { Role } from "./role";

export interface SkillItem {
  name: string;
  roles?: Role[]; // resume/CV filter tags; omit to always show
}

export interface SkillCategory {
  label: string; // e.g. "Languages", "Frameworks"
  items: SkillItem[];
}

export interface Skills {
  categories: SkillCategory[];
}
