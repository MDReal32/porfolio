export interface SkillCategory {
  label: string; // e.g. "Languages", "Frameworks"
  items: string[];
}

export interface Skills {
  categories: SkillCategory[];
}
