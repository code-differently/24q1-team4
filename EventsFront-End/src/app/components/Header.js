import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['logo-container']}>
          <video className={styles.logo} autoPlay={true} muted>
              <source src="logo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
      </div>
      <nav className="z-depth-0 white lighten-4">
          <div className="nav-wrapper container">
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li className="logged-in">
                      <a href="#" className="grey-text modal-trigger" data-target="modal-account">Account</a>
                  </li>
                  <li className="logged-in">
                      <a href="#" className="grey-text" id="logout">Logout</a>
                  </li>
                  <li className="logged-out">
                      <a href="#" className="grey-text modal-trigger" data-target="modal-login">Login</a>
                  </li>
                  <li className="logged-out">
                      <a href="#" className="grey-text modal-trigger" data-target="modal-signup">Sign up</a>
                  </li>
              </ul>
          </div>
        </nav>
    </header>
  );
}
