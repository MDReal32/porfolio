export interface Education {
  school: string;
  program: string;
  location?: string;
  start: string; // e.g. "2017-09"
  end: string; // e.g. "2021-05"
  website?: string;
}
