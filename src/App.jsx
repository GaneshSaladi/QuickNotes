import { useState, useEffect } from 'react'
import './App.css'
import NotesGrid from './Components/NotesGrid';
import FormGrid from './Components/FormGrid';
import { v4 as uuidv4 } from 'uuid';

function App() {
  // state variables
  const [notes, setNotes] = useState([]);
  const allNotes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];
  const [selectedNotes, setSelectedNotes] = useState({});

  // used to get and update notes while onloading
  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
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
    setSelectedNotes({ title: '', notes: '' });
  }


  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="header-logo">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
              <h1>QuickNotes</h1>
            </div>
            <div className="header-controls">
              <div className="search-container">
                <span className="material-icons search-icon">search</span>
                <input
                  className="search-input"
                  placeholder="Search notes..."
                  type="search"
                />
              </div>
              <div className="sort-container">
                <select className="sort-select">
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Title A-Z</option>
                </select>
                <span className="material-icons sort-icon">unfold_more</span>
              </div>
              <button className="theme-toggle">
                <span className="material-icons">wb_sunny</span>
              </button>
            </div>
          </div>
        </div>
      </header>
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
