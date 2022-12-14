import { Note, Category, CategoryName } from "../services/types";

export const categories: Category[] = [
  {
    name: "Task",
    iconClass: "fa-solid fa-list-check",
  },
  {
    name: "Random Thought",
    iconClass: "fa-solid fa-star",
  },
  {
    name: "Idea",
    iconClass: "fa-regular fa-lightbulb",
  },
];

export function getCategoryIconClass(category_name: string) {
  const category = categories.find((c) => c.name === category_name);
  if (category) {
    return category.iconClass;
  }
}

export function formatCategory(category_name: string) {
  return category_name.toLowerCase().replace(" ", "-");
}

export function countNotesByCategory(
  category_name: string,
  storedNotes: Note[]
) {
  let activeNotes = 0;
  let archivedNotes = 0;
  storedNotes.map((note) => {
    if (note.category === category_name) {
      if (note.isArchived) {
        archivedNotes++;
      } else {
        activeNotes++;
      }
    }
  });
  return { activeNotes, archivedNotes };
}
