import type { Assignment, Book, Note, Pyq, Video } from "../types";

// Course content is added through the CMS (/admin/upload). Nothing is
// published yet, so every course page shows its "coming soon" state.

export const notes: Note[] = [];
export const videos: Video[] = [];
export const books: Book[] = [];
export const pyqs: Pyq[] = [];
export const assignments: Assignment[] = [];
