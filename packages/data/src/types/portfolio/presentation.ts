export interface Presentation {
  title: string;
  event: string; // conference / seminar
  location?: string;
  date: string; // "YYYY-MM" or free text
  url?: string;
}
