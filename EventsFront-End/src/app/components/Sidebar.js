import React, {useState, useEffect} from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar({ onEventSelected }) {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const response = await fetch("http://127.0.0.1:8082/events");
    const events = await response.json();
    setEvents(events);
  };

  const onEventClick = (event) => {
    if (!onEventSelected) return;
    onEventSelected(event);
  };

  useEffect(() => {
    getEvents();
  }, events);

  return (
    <div className={styles.sidebar}>
        <div className={styles.topnav}>
            <input type="text" placeholder="Search for event" />
        </div>
        <button className={styles['search-button']}><i className={styles['gg-search']}></i></button>
        <button className={styles['add-button']}><i className={styles['gg-add-r']}></i></button>
        <h6>Events</h6>
        <ul>
            { events.map((event, index) => (
              <li key={index} className={styles['event-box']} onClick={() => onEventClick(event)}>{event.eventName}</li>
            ))}
        </ul>
    </div>
  );
}