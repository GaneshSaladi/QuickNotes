import React, { useState } from 'react'

const Header = (props) => {
    const { handleSearch } = props;
    const [seachValue, setSearchValue] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchValue(value);
        handleSearch(value)
    };

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
                                    value={seachValue || ''}
                                    onChange={handleChange}
                                    className="search-input"
                                    placeholder="Search notes..."
                                    
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
        </>
    )
}

export default Header