import NotesList from "../../components/notesList/NotesList";
import React from 'react';
import { getAllNotes } from '../../features/notes/noteSlice';
import { useSelector } from "react-redux";

const NotesPage = () => {
  const notes = useSelector(getAllNotes);
  return (
    <NotesList notes = {notes} />
  )
}

export default NotesPage;
