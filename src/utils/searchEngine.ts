import Fuse from 'fuse.js';
import { candidates, synonymsMap } from '../data/database';

export interface SearchResult {
  candidateId: string;
  candidateName: string;
  party: string;
  proposal: typeof candidates[0]['proposals'][0];
}

const flatData: SearchResult[] = candidates.flatMap(c =>
  c.proposals.map(p => ({
    candidateId: c.id,
    candidateName: c.name,
    party: c.party,
    proposal: p
  }))
);

const expandQuery = (query: string): string => {
  const lower = query.toLowerCase().trim();
  let expanded = lower;
  for (const [key, synonyms] of Object.entries(synonymsMap)) {
    if (lower.includes(key) || synonyms.some(s => lower.includes(s))) {
      expanded += ` ${key} ${synonyms.join(' ')}`;
    }
  }
  return expanded;
};

const options = {
  includeScore: true,
  threshold: 0.4,
  ignoreLocation: true,
  keys: [
    { name: 'candidateName', weight: 1 },
    { name: 'party', weight: 1 },
    { name: 'proposal.theme', weight: 2 },
    { name: 'proposal.summary', weight: 2 },
    { name: 'proposal.content', weight: 3 },
    { name: 'proposal.keywords', weight: 2 }
  ]
};

const fuse = new Fuse(flatData, options);

export const searchProposals = (query: string): SearchResult[] => {
  if (!query) return [];
  const expanded = expandQuery(query);
  return fuse.search(expanded).map(r => r.item);
};