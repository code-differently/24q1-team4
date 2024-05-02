"use client"
// import EditEvent from './components/EditEvent'; // Import the EditEvent component
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Modals from './components/Modals';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


export default function Home() {
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
  <main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script src="index.js"></script>
      <Header />
      <Modals />
      <div className="container">
        <Sidebar 
          toggleMainContentVisibility={toggleMainContentVisibility} 
          manageEventButtonClick={manageEventButtonClick} 
        />
        {isMainContentVisible && <MainContent showEventDetails={showEventDetails} fetchedEventData={fetchedEventData} />}
      </div>
      <Footer />
</main>
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
 