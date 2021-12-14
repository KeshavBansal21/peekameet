import {  useEffect ,useState} from "react";
import NotesList from "./NotesList";
import { nanoid } from 'nanoid';
const NoteApp = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "21/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "28/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my new note!",
      date: "30/04/2021",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
 
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text)=>{
      const date = new Date();
      const newNote = {
          id:nanoid() ,
          text:text , 
          date:date.toLocaleDateString() ,
      };
      const newNotes = [...notes , newNote];
      setNotes(newNotes);
  }
  return(
      <div className="container">
          <NotesList
            notes = {notes}
            handleAddNote = {addNote}
          />
      </div>
  )
};

export default NoteApp;
