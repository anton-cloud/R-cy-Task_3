import { Note } from "../services/types";
import { v4 as uuidv4 } from "uuid";

export const NotesData: Note[] = [
  {
    id: uuidv4(),
    name: "Shopping list",
    created: new Date(),
    category: "Task",
    content: "Lorem, ipsum.",
    isArchived: true,
  },
  {
    id: uuidv4(),
    name: "Ipsum",
    created: new Date(),
    category: "Idea",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    isArchived: true,
  },
  {
    id: uuidv4(),
    name: "Sit amet",
    created: new Date(),
    category: "Random Thought",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    isArchived: true,
  },
  {
    id: uuidv4(),
    name: "Adipiscing ",
    created: new Date(),
    category: "Task",
    content: "Do eiusmod tempor",
    isArchived: true,
  },
  {
    id: uuidv4(),
    name: "Ipsum",
    created: new Date(),
    category: "Idea",
    content: "Lorem ipsum",
    isArchived: true,
  },
  {
    id: uuidv4(),
    name: "Amet",
    created: new Date(),
    category: "Random Thought",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    isArchived: true,
  },
  {
    id: uuidv4(),
    name: "List",
    created: new Date(),
    category: "Task",
    content: "Lorem, ipsum.",
    isArchived: true,
  },
  {
    id: uuidv4(),
    name: "Archive",
    created: new Date(),
    category: "Random Thought",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    isArchived: false,
  },
];
