import React, { useState, useEffect } from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar({ onEventSelected }) {
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({ eventName: '', eventDate: '', headCount: '' });
    const [showAddEventForm, setShowAddEventForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const getEvents = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8082/events");
            const data = await response.json();
            setEvents(data);
        } catch (error) {
            console.error('Error fetching events:', error);
            setErrorMessage('Failed to fetch events. Please refresh the page.');
        }
    };

    useEffect(() => {
        getEvents();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEvent(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the eventDate format
        if (!/^\d{8}$/.test(newEvent.eventDate)) {
            alert('Date must be in YYYYMMDD format');
            return;
        }

        // Convert the date to an integer (YYYYMMDD)
        const eventDateInt = parseInt(newEvent.eventDate, 10);

        const eventToCreate = {
            ...newEvent,
            eventDate: eventDateInt
        };

        try {
            const response = await fetch('http://127.0.0.1:8082/test-create-event', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(eventToCreate)
            });
            if (response.ok) {
                const addedEvent = await response.json();
                setEvents([...events, addedEvent]);
                setNewEvent({ eventName: '', eventDate: '', headCount: '' }); // Reset form
                setShowAddEventForm(false); // Close form
            } else {
                throw new Error('Failed to create event');
            }
        } catch (error) {
            console.error("Error creating event:", error);
            setErrorMessage("Failed to create event. Please try again.");
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const foundEvent = events.find(event => event.eventName.toLowerCase().includes(searchTerm.toLowerCase()));
        if (foundEvent) {
            onEventSelected(foundEvent);
        } else {
            alert('No event found with that name');
        }
    };

    return (
        <div className={styles.sidebar}>
            <div className={styles.topnav}>
                <input
                    type="text"
                    placeholder="Search for event"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                />
                <button className={styles['search-button']} onClick={handleSearch}>
                    <i className={styles['gg-search']}></i>
                </button>
                <button className={styles['add-button']} onClick={() => setShowAddEventForm(!showAddEventForm)}>
                    <i className={styles['gg-add-r']}></i>
                </button>
            </div>
            {showAddEventForm && (
                <form onSubmit={handleSubmit}>
                    <input type="text" name="eventName" placeholder="Event Name" value={newEvent.eventName} onChange={handleInputChange} required />
                    <input type="text" name="eventDate" placeholder="Event Date (YYYYMMDD)" value={newEvent.eventDate} onChange={handleInputChange} required />
                    <input type="number" name="headCount" placeholder="Head Count" value={newEvent.headCount} onChange={handleInputChange} required />
                    <button type="submit">Add Event</button>
                </form>
            )}
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            <h6>Events</h6>
            <ul>
                {events.map((event, index) => (
                    <li key={index} className={styles['event-box']} onClick={() => onEventSelected(event)}>{event.eventName}</li>
                ))}
            </ul>
        </div>
    );
}
