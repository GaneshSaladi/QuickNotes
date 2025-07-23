import React from 'react'

const FormGrid = (props) => {
    const { handleSaveNote, selectedNotes, setSelectedNotes } = props;

    const handleChange = (e) => {
        let {name , value} = e.target;
        setSelectedNotes({
            ...selectedNotes,
            [name] : value
        })
    }
    return (
        <>
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
                                    name='title'
                                    value={selectedNotes?.title || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="content">
                                    Content
                                </label>
                                <textarea
                                    className="note-input note-textarea"
                                    id="content"
                                    name='notes'
                                    onChange={handleChange}
                                    value={selectedNotes?.notes || ''}
                                    placeholder="Start writing your note..."
                                    rows={8}
                                />
                            </div>
                            <button onClick={handleSaveNote} className="save-button">
                                {selectedNotes?.notesid ? 'Update' : 'Save'} Note
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormGrid