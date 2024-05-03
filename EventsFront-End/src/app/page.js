"use client"
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Modals from './components/Modals';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import styles from './page.module.scss';

export default function Page() {
  const [events, setEvents] = useState([]); // State to hold all events
  const [selectedEvent, setSelectedEvent] = useState(null); // State to hold the currently selected event

  // Function to fetch all events from the backend
  const fetchEvents = () => {
    fetch("http://127.0.0.1:8082/events")
      .then(response => response.json())
      .then(data => {
        setEvents(data);
        console.log("Event Data:", data);
      })
      .catch(error => {
        console.error("Error fetching event data:", error);
      });
  };

  // Function to handle event updates
  const onEventUpdated = (updatedEvent) => {
    const updatedEvents = events.map(event => {
      if (event.eventId === updatedEvent.eventId) {
        return updatedEvent; // Replace with updated event data
      }
      return event;
    });
    setEvents(updatedEvents); // Update the state with the new events array
    alert('Event updated successfully!');
  };

  // Effect to fetch events on component mount
  useEffect(() => {
    fetchEvents();
  }, []);

  // Function to handle the selection of an event
  const onEventSelected = (event) => {
    setSelectedEvent(event);
  };

  return (
    <>
      <Header />
      <Modals />
      <div className={styles.container}>
        <Sidebar onEventSelected={onEventSelected} events={events} />
        {selectedEvent && <MainContent event={selectedEvent} onEventUpdated={onEventUpdated} />}
      </div>
      <Footer />
    </>
  );
}
