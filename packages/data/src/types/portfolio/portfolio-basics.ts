import type { PortfolioLinks } from "./portfolio-links.ts";

export interface PortfolioBasics {
  fullName: string;
  preferredName?: string;
  avatar?: string;
  title: string;
  location: string;
  email: string;
  phone?: string;
  links?: PortfolioLinks;
}
