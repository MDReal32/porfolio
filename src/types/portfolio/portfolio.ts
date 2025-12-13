import type { Education } from "./education";
import type { Experience } from "./experience";
import type { Language } from "./language";
import type { PortfolioBasics } from "./portfolio-basics";
import type { Project } from "./project";
import type { Skills } from "./skills";
import type { Summary } from "./summary";

export interface Portfolio {
  basics: PortfolioBasics;
  summary?: Summary;
  experience?: Experience[];
  education?: Education[];
  skills?: Skills;
  languages?: Language[];
  projects?: Project[];
}
