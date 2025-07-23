import { useState, useEffect } from 'react'
import './App.css'
import NotesGrid from './Components/NotesGrid';
import FormGrid from './Components/FormGrid';
import { v4 as uuidv4 } from 'uuid';
import Header from './Components/Header';

function App() {
  // state variables
  const [notes, setNotes] = useState([]);
  const allNotes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];
  const [notesRef,setNotesRef] = useState([]);
  const [selectedNotes, setSelectedNotes] = useState({});

  // used to get and update notes while onloading
  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
      setNotesRef(JSON.parse(storedNotes));
    }
  }, []);


  // function to save or update note 
  const handleSaveNote = (e) => {
    e.preventDefault();
    if (selectedNotes?.notesid) {
      const updatedNotes = allNotes.map(note =>
        note.notesid === selectedNotes.notesid ? { ...selectedNotes } : note
      );

      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      setNotes(updatedNotes);
      setNotesRef(updatedNotes);
    } else {
      let notesEntered = {
        ...selectedNotes, notesid: uuidv4(), createdon: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short', // or 'long' for full month name
          day: '2-digit',
        }),
      }
      const updatedNotes = [...allNotes, notesEntered];
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      setNotes(updatedNotes);
      setNotesRef(updatedNotes);
    }
    setSelectedNotes({ title: '', notes: '' });

  };

  // setData on edit
  const onEdit = (notesData) => {
    setSelectedNotes(notesData)
  };

  // function to handle Edit
  const handleDelete = (notesData) => {
    const updatedNotes = notes.filter(note => note.notesid !== notesData?.notesid);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
    setNotesRef(updatedNotes);
    setSelectedNotes({ title: '', notes: '' });
  };

  // function to handle Search
  const handleSearch =(value)=>{
    if(!value.trim()){
      setNotes(notesRef);
    }else{
      setNotes(
      notesRef.filter(note => note.title.toLowerCase().includes(value))
    );
    }
  }


  return (
    <>
     <Header handleSearch={handleSearch}/>
      <main className="main-content container">
        <div className="main-grid">
          <FormGrid handleSaveNote={handleSaveNote} selectedNotes={selectedNotes} setSelectedNotes={setSelectedNotes} />
          <div className="notes-grid-container">
            <div className="notes-grid">
              {notes?.map((note, index) => {
                return (
                  <div key={index}>
                   <NotesGrid notesData={note} index={index} onEdit={onEdit} handleDelete={handleDelete} />
                  </div>
                 
                )
              })}

            </div>
          </div>
        </div>
      </main>
    </>



  )
}

export default App
