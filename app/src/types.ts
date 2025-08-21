// app/src/types.ts

export type TimelineEvent = {
  id: string;           // unique identifier
  year: number;         // event year
  title: string;        // event title
  description?: string; // optional detailed description
  image?: string;       // optional image URL from /public
  tags?: string[];      // optional tags for filtering/bookmarks
};
