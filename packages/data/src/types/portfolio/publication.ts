export interface Publication {
  title: string;
  authors: string; // full byline, e.g. "Firdus, E., Aliyev, V., …"
  highlight?: string; // substring of `authors` to bold (the owner's name)
  venue: string;
  year: number;
  doi?: string; // bare DOI, e.g. "10.1051/e3sconf/202447402004"
  url?: string; // canonical article link (used if no DOI)
  note?: string; // e.g. "Scopus-indexed"
}
