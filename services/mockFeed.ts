import { ReactNode } from "react";

export type Perception = {
  question: ReactNode;
  id: string;
  author: string;
  avatar: string;
  category: string;
  title: string;
  content: string;
  image?: string;
  agree: number;
  disagree: number;
  comments: number;
  createdAt: string;
  votes: {
    agree: number,
    disagree: number
  }
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
      agree: 128,
      disagree: 42,
      comments: 18,
      createdAt: new Date().toISOString(),
      votes: {
        agree: 30,
        disagree: 12
      },
      question: "Is democracy working for young people?",
    },
    {
      id: "2",
      author: "James M.",
      avatar: "https://i.pravatar.cc/150?img=12",
      category: "Technology",
      title: "AI will replace more jobs than we expect.",
      content:
        "Automation is accelerating faster than governments are regulating it.",
      agree: 210,
      disagree: 88,
      comments: 64,
      createdAt: new Date().toISOString(),
      votes: {
        agree: 50,
        disagree: 20
      },
      question: "Will AI replace more jobs than we expect?",
    },
    {
      id: "3",
      author: "Sarah L.",
      avatar: "https://i.pravatar.cc/150?img=45",
      category: "Business",
      title: "Small businesses embracing the digital age?",
      content:
        "The shift towards digital platforms is reshaping how small businesses operate and compete.",
      agree: 1000,
      disagree: 500,
      comments: 25,
      createdAt: new Date().toISOString(),
      votes: {
        agree: 35,
        disagree: 10
      },
      question: "How can small businesses adapt to the digital age?",
    }, 
    {
      id: "4",
      author: "Liam T.",
      avatar: "https://i.pravatar.cc/150?img=22",
      category: "Health",
      title: "Mental health awareness in schools?",
      content:
        "There is a growing recognition of the importance of mental health in educational settings.",
      agree: 800,
      disagree: 200,
      comments: 30,
      createdAt: new Date().toISOString(),
      votes: {
        agree: 45,
        disagree: 15
      },
      question: "Is mental health awareness improving in schools?",

    }
  ];
};     