import React, { useState, useEffect } from 'react';
import styles from './MainContent.module.css';

function MainContent({ event }) {
    const [weather, setWeather] = useState(null);

    const deleteEvent = (eventId) => {
        fetch(`http://127.0.0.1:8082/events/${eventId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Event deleted successfully!');
            } else {
                alert('Failed to delete the event.');
            }
        })
        .catch(error => {
            console.error('Error deleting the event:', error);
            alert('Error deleting the event.');
        });
    };

    const fetchWeather = () => {
        const apiKey = 'b1c5b89a28a49878d7596078785708fb'; 
        // Wilmington, Delaware coordinates
        const lat = 39.7459;
        const lon = -75.5466;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            setWeather({
                temp: data.main.temp,
                description: data.weather[0].description
            });
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Failed to fetch weather data');
        });
    };

    useEffect(() => {
        fetchWeather();  
    }, []);


    return (
        <div className={styles['main-content']}>
            <div className={styles['outer-box']}>
                <div className={styles.card}>
                    <div className={styles['card-inner']}>

                        <div className={styles['card-front']}>You're Invited</div>
                        <div className={styles['card-back']}>
                            <h2>{event?.eventName}</h2>
                            <p>Date: {event?.eventDate}</p>
                            <p>Head Count: {event?.headCount}</p>
                            <button className={styles['trash-button']} onClick={() => deleteEvent(event?.eventId)}>
                                <i className={styles['gg-trash']}></i>
                            </button>
                            <button className={styles['cloud-button']} onClick={fetchWeather}>
                                <i className={styles['gg-cloud']}></i>
                            </button>
                            {weather && (
                                <div>
                                    <p>Temperature: {weather.temp}°C</p>
                                    <p>Condition: {weather.description}</p>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
