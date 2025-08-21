// src/data/events.ts
import type { TimelineEvent } from '../types/types';

export const events: TimelineEvent[] = [
  {
    id: 'e1',
    year: 2000,
    title: 'Project Kickoff',
    description: 'Initial version of the timeline app created.',
    image: '/assets/kickoff.png',
    tags: ['start', 'milestone'],
  },
  {
    id: 'e2',
    year: 2005,
    title: 'First Major Update',
    description: 'Added more features and improved responsiveness.',
    tags: ['update'],
  },
  {
    id: 'e3',
    year: 2010,
    title: 'New Design Launch',
    description: 'Redesigned UI with better accessibility.',
    image: '/assets/design.png',
    tags: ['design', 'accessibility'],
  },
];
