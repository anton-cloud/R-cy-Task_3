import { Note, NoteFormatted } from "../services/types";
import { formatDate, getDatesList } from "./getDatesFromStr";

export function formatNote(note: Note) {
    return {
        id: note.id,
        name: note.name,
        created: formatDate(note.created),
        category: note.category,
        content: note.content,
        datesList: getDatesList(note.content),
        isArchived: note.isArchived            
    }
}