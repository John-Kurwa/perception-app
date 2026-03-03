export type Perception = {
  id: string;
  author: string;
  avatar: string;
  category: string;
  title: string;
  content: string;
  image?: string;
  agrees: number;
  disagrees: number;
  comments: number;
  createdAt: string;
};

export const fetchPerceptions = async (): Promise<Perception[]> => {
  // simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));

  return [
    {
      id: "1",
      author: "Amina K.",
      avatar: "https://i.pravatar.cc/150?img=32",
      category: "Politics",
      title: "Is democracy working for young people?",
      content:
        "Many young citizens feel excluded from decision-making processes. Is the system evolving fast enough?",
      // image: "https://picsum.photos/400/300",
      agrees: 128,
      disagrees: 42,
      comments: 18,
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      author: "James M.",
      avatar: "https://i.pravatar.cc/150?img=12",
      category: "Technology",
      title: "AI will replace more jobs than we expect.",
      content:
        "Automation is accelerating faster than governments are regulating it.",
      agrees: 210,
      disagrees: 88,
      comments: 64,
      createdAt: new Date().toISOString(),
    },
  ];
};
     