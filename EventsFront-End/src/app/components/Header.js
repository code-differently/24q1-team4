import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <nav className="z-depth-0 white lighten-4">
            <div className="nav-wrapper container">
            <div className="logo-container">
            <video className="logo" autoPlay muted>
                <source src="../../logo.mp4" type="video/mp4"></source>
            </video>
            </div>
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
