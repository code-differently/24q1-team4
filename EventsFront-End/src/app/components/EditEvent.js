import React, { useState, useEffect } from 'react';

export default function EditEvent() {
  const [eventId, setEventId] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [headCount, setHeadCount] = useState('');

  useEffect(() => {
    // Fetch the existing event data when the component mounts
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    // Fetch the existing event data from the backend
    fetch("http://127.0.0.1:8082/events/${id}") // Assuming eventId 1 for demonstration
      .then((response) => response.json())
      .then((data) => {
        setEventId(data.eventId);
        setEventDate(data.eventDate);
        setHeadCount(data.headCount);
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the updated event object
    const updatedEvent = {
      eventId: eventId,
      eventDate: eventDate,
      headCount: headCount
    };

    // Send a PUT request to update the event
    fetch("http://127.0.0.1:8082/events/" + eventId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedEvent)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Updated Event Data:", data);
        // Optionally update UI or handle response
      })
      .catch((error) => {
        console.error("Error updating event:", error);
      });
  };

  return (
    <div>
      <h1>Edit Event</h1>
      <form onSubmit={handleSubmit}>
      <div>
    <label>Event ID:</label>
     <input type="text" value={eventId} onChange={(e) => setEventId(e.target.value)} />
        </div>

        <div>
          <label>Event Date:</label>
          <input type="text" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
        </div>
        <div>
          <label>Head Count:</label>
          <input type="text" value={headCount} onChange={(e) => setHeadCount(e.target.value)} />
        </div>
        <button type="submit">Update Event</button>
      </form>
    </div>

  );
}
