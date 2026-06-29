export interface Teaching {
  role: string; // e.g. "Teaching Assistant", "Instructor"
  course?: string;
  institution: string;
  start: string; // "YYYY-MM"
  end: string; // "YYYY-MM" or "Present"
}
