import { useState, useEffect } from 'react'
import './App.css'

function App() {


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
          <div className="note-form-panel">
            <div className="note-form-panel-sticky">
              <div className="note-form-container">
                <h2 className="note-form-title">Create a New Note</h2>
                <form className="note-form">
                  <div>
                    <label className="sr-only" htmlFor="title">
                      Title
                    </label>
                    <input
                      className="note-input"
                      id="title"
                      placeholder="Note Title"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="content">
                      Content
                    </label>
                    <textarea
                      className="note-input note-textarea"
                      id="content"
                      placeholder="Start writing your note..."
                      rows={8}
                      defaultValue={""}
                    />
                  </div>
                  <button className="save-button" type="submit">
                    Save Note
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="notes-grid-container">
            <div className="notes-grid">
              <div className="note-card">
                <div>
                  <h3 className="note-card-title">Project Brainstorm</h3>
                  <p className="note-card-content">
                    Initial ideas for the new design system, including component
                    libraries, color palettes, and typography guidelines...
                  </p>
                </div>
                <div className="note-card-footer">
                  <span className="note-card-date">May 20, 2024</span>
                  <div className="note-card-actions">
                    <button className="action-button">
                      <span className="material-icons">edit</span>
                    </button>
                    <button className="action-button">
                      <span className="material-icons">delete</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="note-card">
                <div>
                  <h3 className="note-card-title">Meeting Notes</h3>
                  <p className="note-card-content">
                    Q2 planning session recap. Key takeaways: focus on user
                    retention, launch marketing campaign by July, hire two new
                    engineers.
                  </p>
                </div>
                <div className="note-card-footer">
                  <span className="note-card-date">May 18, 2024</span>
                  <div className="note-card-actions">
                    <button className="action-button">
                      <span className="material-icons">edit</span>
                    </button>
                    <button className="action-button">
                      <span className="material-icons">delete</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="note-card">
                <div>
                  <h3 className="note-card-title">Grocery List</h3>
                  <p className="note-card-content">
                    Milk, eggs, bread, chicken breast, avocados, spinach, bell
                    peppers, onions, garlic, olive oil.
                  </p>
                </div>
                <div className="note-card-footer">
                  <span className="note-card-date">May 17, 2024</span>
                  <div className="note-card-actions">
                    <button className="action-button">
                      <span className="material-icons">edit</span>
                    </button>
                    <button className="action-button">
                      <span className="material-icons">delete</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="note-card">
                <div>
                  <h3 className="note-card-title">Travel Plans</h3>
                  <p className="note-card-content">
                    Flight confirmation: UA456 to Tokyo on June 15th. Hotel: Grand
                    Hyatt Tokyo. Remember to pack the camera and portable charger.
                  </p>
                </div>
                <div className="note-card-footer">
                  <span className="note-card-date">May 15, 2024</span>
                  <div className="note-card-actions">
                    <button className="action-button">
                      <span className="material-icons">edit</span>
                    </button>
                    <button className="action-button">
                      <span className="material-icons">delete</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="note-card">
                <div>
                  <h3 className="note-card-title">Book Recommendations</h3>
                  <p className="note-card-content">
                    "Project Hail Mary" by Andy Weir, "Klara and the Sun" by Kazuo
                    Ishiguro, "The Midnight Library" by Matt Haig.
                  </p>
                </div>
                <div className="note-card-footer">
                  <span className="note-card-date">May 12, 2024</span>
                  <div className="note-card-actions">
                    <button className="action-button">
                      <span className="material-icons">edit</span>
                    </button>
                    <button className="action-button">
                      <span className="material-icons">delete</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="note-card">
                <div>
                  <h3 className="note-card-title">Personal Goals</h3>
                  <p className="note-card-content">
                    1. Read 20 books this year. 2. Exercise 3 times a week. 3. Learn
                    to play the guitar. 4. Save for a down payment.
                  </p>
                </div>
                <div className="note-card-footer">
                  <span className="note-card-date">May 10, 2024</span>
                  <div className="note-card-actions">
                    <button className="action-button">
                      <span className="material-icons">edit</span>
                    </button>
                    <button className="action-button">
                      <span className="material-icons">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>



  )
}

export default App
