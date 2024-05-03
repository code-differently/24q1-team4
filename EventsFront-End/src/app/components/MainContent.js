import React from 'react';
import styles from './MainContent.module.css';

function formatDate(dateInt) {
    const str = dateInt.toString();
    const year = str.substring(0, 4);
    const month = str.substring(4, 6);
    const day = str.substring(6, 8);
    return `${year}-${month}-${day}`;
}

export default function MainContent({ event }) {
    return (
        <div className={styles['main-content']}>
            <div className={styles['outer-box']}>
                <div className={styles.card}>
                    <div className={styles['card-inner']}>
                        <div className={styles['card-front']}>
                            You're Invited
                        </div>
                        <div className={styles['card-back']}>
                            <h2>{event?.eventName || 'Event Name'}</h2>
                            <p>Date: {event ? formatDate(event.eventDate) : 'Event Date'}</p>
                            <p>Head Count: {event?.headCount || 'Head Count'}</p>
                            <button className={styles['trash-button']}><i className={styles['gg-trash']}></i></button>
                            <button className={styles['cloud-button']}><i className={styles['gg-cloud']}></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
