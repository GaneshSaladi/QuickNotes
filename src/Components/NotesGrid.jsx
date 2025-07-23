import React from 'react'

const NotesGrid = (props) => {
    const { onEdit, handleDelete, notesData, index } = props
    return (
        <>
            <div className="note-card" key={index}>
                <div>
                    <h3 className="note-card-title">{notesData?.title || ''}</h3>
                    <p className="note-card-content">
                        {notesData?.notes || ''}
                    </p>
                </div>
                <div className="note-card-footer">
                    <span className="note-card-date">{notesData?.createdon || ''}</span>
                    <div className="note-card-actions">
                        <button className="action-button" onClick={()=>{onEdit(notesData)}}>
                            <span className="material-icons">edit</span>
                        </button>
                        <button className="action-button" onClick={()=>{handleDelete(notesData)}}>
                            <span className="material-icons">delete</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotesGrid