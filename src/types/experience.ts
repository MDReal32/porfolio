export interface Experience {
  company: string;
  role: string;
  location?: string;
  start: string; // e.g. "2022-07"
  end: string; // e.g. "Present" or "2023-05"
  highlights?: string[];
}
