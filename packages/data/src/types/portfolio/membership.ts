export interface Membership {
  organization: string;
  role?: string; // e.g. "Member", "Student Member"
  since?: string; // "YYYY"
}
