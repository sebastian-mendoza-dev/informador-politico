export interface Proposal {
  id: string;
  theme: string;
  summary: string;
  content: string;
  keywords: string[];
  inferida?: boolean;
}

export interface Candidate {
  id: string;
  name: string;
  party: string;
  proposals: Proposal[];
}