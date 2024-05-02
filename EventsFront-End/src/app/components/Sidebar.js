import React from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar({ toggleMainContentVisibility, manageEventButtonClick }) {
  const handleToggleMainContentVisibility = async () => {
    toggleMainContentVisibility(); // Toggle main content visibility
    manageEventButtonClick(); // Fetch event data from the backend
  };

  return (
    <div className={styles.sidebar}>
        <div className={styles.topnav}>
            <input type="text" placeholder="Search for event" />
        </div>
        <button className={styles['search-button']}><i className={styles['gg-search']}></i></button>
        <button className={styles['add-button']}><i className={styles['gg-add-r']}></i></button>
        <h6>Events</h6>
        <ul>
            <li className={styles['event-box']}>Event 1</li>
            <li className={styles['event-box']}>Event 2</li>
            <li className={styles['event-box']}>Event 3</li>
            <li className={styles['event-box']}>Event 4</li>
            <li className={styles['event-box']}>Event 5</li>
        </ul>
    </div>
  );
}