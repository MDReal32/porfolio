export interface ResearchExperience {
  role: string; // e.g. "Research Assistant"
  organization: string;
  location?: string;
  start: string; // "YYYY-MM"
  end: string; // "YYYY-MM" or "Present"
  highlights?: string[];
}
