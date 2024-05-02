import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />

    
      <nav class="z-depth-0 white lighten-4">
            <div class="nav-wrapper container">
            <div className="logo-container">
            <video className="logo" autoPlay muted>
                <source src="../../logo.mp4" type="video/mp4"></source>
            </video>
            </div>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li class="logged-in">
                        <a href="#" class="grey-text modal-trigger" data-target="modal-account">Account</a>
                    </li>
                    <li class="logged-in">
                        <a href="#" class="grey-text" id="logout">Logout</a>
                    </li>
                    <li class="logged-out">
                        <a href="#" class="grey-text modal-trigger" data-target="modal-login">Login</a>
                    </li>
                    <li class="logged-out">
                        <a href="#" class="grey-text modal-trigger" data-target="modal-signup">Sign up</a>
                    </li>
                </ul>
            </div>
        </nav>
      
    </header>
  );
}
