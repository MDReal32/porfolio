export interface SkillCategory {
  label: string; // e.g. "Languages", "Frameworks"
  items: string[];
}

export interface Skills {
  primary?: string[];
  secondary?: string[];
  tooling?: string[];

  // Resume-oriented breakdown (Languages / Frameworks / Tools …)
  categories?: SkillCategory[];
}
