import type { Award } from "./award";
import type { Certification } from "./certification";
import type { Education } from "./education";
import type { Experience } from "./experience";
import type { Language } from "./language";
import type { Membership } from "./membership";
import type { PortfolioBasics } from "./portfolio-basics";
import type { Presentation } from "./presentation";
import type { Project } from "./project";
import type { Publication } from "./publication";
import type { Reference } from "./reference";
import type { ResearchExperience } from "./research-experience";
import type { Skills } from "./skills";
import type { Summary } from "./summary";
import type { Teaching } from "./teaching";

export interface Portfolio {
  basics: PortfolioBasics;
  summary?: Summary;
  experience?: Experience[];
  education?: Education[];
  skills?: Skills;
  languages?: Language[];
  projects?: Project[];
  publications?: Publication[];

  // Academic-CV sections (optional; rendered on /cv only when present)
  research?: ResearchExperience[];
  presentations?: Presentation[];
  teaching?: Teaching[];
  awards?: Award[];
  certifications?: Certification[];
  memberships?: Membership[];
  references?: Reference[];
}
