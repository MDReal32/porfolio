export interface ProjectLink {
  type: Lowercase<string>;
  label: string; // "GitHub", "Live", "Docs"
  href: string;
}
