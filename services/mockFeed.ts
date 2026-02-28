export type Perception = {
  id: string;
  username: string;
  country: string;
  content: string;
  reactions: number;
  comments: number;
  reposts: number;
  createdAt: string;
};

export const fetchPerceptions = async (): Promise<Perception[]> => {
  // simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));

  return [
    {
      id: "1",
      username: "GlobalThinker",
      country: "USA",
      content: "AI will redefine creativity, not replace it.",
      reactions: 421,
      comments: 87,
      reposts: 34,
      createdAt: "2h ago",
    },
    {
      id: "2",
      username: "CulturalLens",
      country: "UK",
      content: "Fast fashion isn’t just about clothes — it’s about identity cycles.",
      reactions: 302,
      comments: 44,
      reposts: 19,
      createdAt: "4h ago",
    },
    {
      id: "3",
      username: "FutureAnalyst",
      country: "Germany",
      content: "Remote work will permanently reshape urban economies.",
      reactions: 510,
      comments: 120,
      reposts: 60,
      createdAt: "6h ago",
    },
  ];
};