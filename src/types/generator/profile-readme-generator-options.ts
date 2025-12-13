import type { Portfolio } from "../portfolio/portfolio";

export interface ProfileReadmeGeneratorOptions {
  portfolio: Portfolio;
  portfolioUrl: string;
  resumeUrl: string;
}
