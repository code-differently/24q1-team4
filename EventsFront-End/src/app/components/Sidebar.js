import React from 'react';

export default function Sidebar({ toggleMainContentVisibility, manageEventButtonClick }) {
  const handleToggleMainContentVisibility = async () => {
    toggleMainContentVisibility(); // Toggle main content visibility
    manageEventButtonClick(); // Fetch event data from the backend
  };

  return (
    <div className="sidebar">
      <div className="topnav">
        <input type="text" placeholder="Search for event" />
      </div>
      <button className="search-button"><i className="gg-search"></i></button>
      <button className="add-button"><i className="gg-add-r"></i></button>
      <ul>
        {/* Use Event 1 as a button */}
        <li className="event-box" onClick={handleToggleMainContentVisibility}>
          Get All Events
        </li>
        <li className="event-box">Event 1</li>
        <li className="event-box">Event 2</li>
        <li className="event-box">Event 3</li>
        <li className="event-box">Event 4</li>
      </ul>
    </div>
  );
}