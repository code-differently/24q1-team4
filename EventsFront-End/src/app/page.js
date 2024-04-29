"use client"
import EditEvent from './editevent'; // Import the EditEvent component
import React, { useState } from 'react';

export default function Home() {
  const [fetchedUserData, setFetchedUserData] = useState(null);
  const [fetchedEventData, setFetchedEventData] = useState(null);
  const [newEvent, setNewEvent] = useState({
    eventId: '',
    eventDate: '',
    headCount: ''
  });
  const [selectedEventId, setSelectedEventId] = useState(null);


  const manageUserButtonClick = async () => {
    console.log("Calling User Backend");
    fetch("http://127.0.0.1:8080/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("User Data:", data);
        setFetchedUserData(data); 
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  const manageEventButtonClick = async () => {
    console.log("Calling Event Backend");
    fetch("http://127.0.0.1:8080/events")
      .then((response) => response.json())
      .then((data) => {
        console.log("Event Data:", data);
        setFetchedEventData(data); 
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
      });
  };
  const createEventButtonClick = async () => {
    console.log("Creating Event");
    fetch("http://127.0.0.1:8080/test-create-event", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEvent)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Created Event Data:", data);
        // Optionally update UI or handle response
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

  const deleteEvent = (eventId) => {
    fetch(`http://127.0.0.1:8080/events/${eventId}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        // If deletion is successful, fetch event data again to update the UI
        manageEventButtonClick();
      } else {
        throw new Error('Failed to delete event');
      }
    })
    .catch(error => {
      console.error('Error deleting event:', error);
    });
  };

  return (
    <main className="users">
      <h1 className="title">Perfectly Planned Events</h1>
      <button className="backend-button" onClick={manageUserButtonClick}>Get User Data</button>
      <button className="backend-button" onClick={manageEventButtonClick}>Get Event Data</button>
      <button onClick={() => deleteEvent(item.eventId)}>Delete</button>

      <form onSubmit={handleSubmit}>
      <div className="input-fields">
        <input type="text" name="eventId" placeholder="Event ID" value={newEvent.eventId} onChange={handleInputChange} />
        <input type="text" name="eventDate" placeholder="Event Date" value={newEvent.eventDate} onChange={handleInputChange} />
        <input type="text" name="headCount" placeholder="Head Count" value={newEvent.headCount} onChange={handleInputChange} />
      </div>
      
      {/* Button to submit the form */}
      <button type="submit" className="backend-button">Create Event</button>
    </form>
    
      {/* Display fetched user data */}
      {fetchedUserData && (
        <div className="displayingbackend">
          <h2 className="mydata">Fetched User Data</h2>
          <ul>
            {fetchedUserData.map((item) => (
              <li key={item.idusers}>
                <strong>ID:</strong> {item.idusers}, <strong>Username:</strong> {item.username}, <strong>Password:</strong> {item.password}
              </li>
            ))}
          </ul>
        </div>
      )}

    {/* Display fetched event data */}
{fetchedEventData && (
  <div className="displayingbackend">
    <h2 className="mydata">Fetched Event Data</h2>
    <ul>
      {fetchedEventData.map((item) => (
        <li key={item.eventId}>
          <strong>Event ID:</strong> {item.eventId}, <strong>Date:</strong> {item.eventDate}, <strong>Headcount:</strong> {item.headCount}
        </li>
      ))}
    </ul>
    
  </div>

)}
     {/* Pass selected eventId to EditEvent component */}
     {selectedEventId && <EditEvent eventId={selectedEventId} />}
           {/* Render the EditEvent component */}
           <EditEvent />
    </main>
  );
}
