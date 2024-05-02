"use client"
import './page.module.scss';
// import EditEvent from './components/EditEvent'; // Import the EditEvent component
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Modals from './components/Modals';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


export default function Page() {
  const [fetchedEventData, setFetchedEventData] = useState(null);
  const [newEvent, setNewEvent] = useState({
    eventId: '',
    eventDate: '',
    headCount: ''
  });
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [showEventDetails, setShowEventDetails] = useState(false);
  const manageEventButtonClick = async () => {
    console.log("Calling Event Backend");
    fetch("http://127.0.0.1:8082/events")
      .then((response) => response.json())
      .then((data) => {
        console.log("Event Data:", data);
        setFetchedEventData(data);
        toggleEventDetails();  
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
      });
  };
  const createEventButtonClick = async () => {
    console.log("Creating Event");
    fetch("http://127.0.0.1:8082/test-create-event", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEvent)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Created Event Data:", data);
      })
      .catch((error) => {
        console.error("Error creating event:", error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    createEventButtonClick(); // Call createEventButtonClick function
  };

  const handleEditEventClick = (eventId) => {
    setSelectedEventId(eventId); // Set selected eventId when clicked
  };

  const toggleEventDetails = () => {
    setShowEventDetails(!showEventDetails);
  };

  const [isMainContentVisible, setIsMainContentVisible] = useState(false);


  const toggleMainContentVisibility = () => {
    setIsMainContentVisible(!isMainContentVisible);
  };


  return (
    <>
      <Header />

      <Modals />

      <div className="container">
          <div className="sidebar">
              <div className="topnav">
                  <input type="text" placeholder="Search for event" />
              </div>
              <button className="search-button"><i className="gg-search"></i></button>
              <button className="add-button"><i className="gg-add-r"></i></button>
              <h6>Events</h6>
              <ul>
                  <li className="event-box">Event 1</li>
                  <li className="event-box">Event 2</li>
                  <li className="event-box">Event 3</li>
                  <li className="event-box">Event 4</li>
                  <li className="event-box">Event 5</li>
              </ul>
          </div>

          <div className="main-content">
              <div className="outer-box">
                  <div className="background-image"></div>
                  <div className="card">
                      <div className="card-inner">
                          <div className="card-front">You're Invited</div>
                          <div className="card-back">
                              <h2>Event Name</h2>
                              <p>Event Details</p>
                              <button className="trash-button"><i className="gg-trash"></i></button>
                              <button className="cloud-button"><i className="gg-cloud"></i></button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <footer>
          "Planned Perfectly Events 2024"
      </footer>
    </>
  );
}
    

// DONT DELETE; This is the functionality for Create Event & Edit Event.

      {/* <form onSubmit={handleSubmit}>
      <div className="input-fields">
        <input type="text" name="eventId" placeholder="Event ID" value={newEvent.eventId} onChange={handleInputChange} />
        <input type="text" name="eventDate" placeholder="Event Date" value={newEvent.eventDate} onChange={handleInputChange} />
        <input type="text" name="headCount" placeholder="Head Count" value={newEvent.headCount} onChange={handleInputChange} />
      </div> */}
      
      {/* Button to submit the form */}
      {/* <button type="submit" className="backend-button">Create Event</button>
    </form>
     */}

    {/* Display fetched event data */}

     {/* Pass selected eventId to EditEvent component */}
     {/* {selectedEventId && <EditEvent eventId={selectedEventId} />} */}
           {/* Render the EditEvent component */}
           {/* <EditEvent /> */}
 