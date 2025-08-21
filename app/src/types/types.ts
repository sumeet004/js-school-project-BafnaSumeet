// src/types/types.ts

export type TimelineEvent = {
  id: string;            // unique identifier
  year: number;          // event year
  title: string;         // event title
  description?: string;  // optional description
  image?: string;        // optional image URL
  tags?: string[];       // optional tags for filtering/bookmarks
};
