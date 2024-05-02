import React from 'react';
import styles from './MainContent.module.css';

export default function MainContent({ event }) {
  return (
    <div className={styles['main-content']}>
        <div className={styles['outer-box']}>
            <div className={styles['background-image']}></div>
            <div className={styles.card}>
                <div className={styles['card-inner']}>
                    <div className={styles['card-front']}>You're Invited</div>
                    <div className={styles['card-back']}>
                        <h2>{event?.eventName}</h2>
                        <p>Event Details</p>
                        <button className={styles['trash-button']}><i className={styles['gg-trash']}></i></button>
                        <button className={styles['cloud-button']}><i className={styles['gg-cloud']}></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
