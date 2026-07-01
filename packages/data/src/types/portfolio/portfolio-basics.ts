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

  // Academic-CV personal details (optional; not shown on the resume)
  dateOfBirth?: string;
  placeOfBirth?: string;
  nationality?: string;
  gender?: string;
  address?: string;
}
