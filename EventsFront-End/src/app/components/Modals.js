import React from 'react';

export default function Modals() {
  return (
    <div>
      {/* Sign Up Modal */}
      <div id="modal-signup" className="modal">
        <div className="modal-content">
          <h4>Sign up</h4>
          <form id="signup-form">
            <div className="input-field">
              <input type="email" id="signup-email" required />
              <label htmlFor="signup-email">Email address</label>
            </div>
            <div className="input-field">
              <input type="password" id="signup-password" required />
              <label htmlFor="signup-password">Choose password</label>
            </div>
            <button className="btn yellow darken-2 z-depth-0">Sign up</button>
          </form>
        </div>
      </div>

      {/* Login Modal */}
      <div id="modal-login" className="modal">
        <div className="modal-content">
          <h4>Login</h4>
          <form id="login-form">
            <div className="input-field">
              <input type="email" id="login-email" required />
              <label htmlFor="login-email">Email address</label>
            </div>
            <div className="input-field">
              <input type="password" id="login-password" required />
              <label htmlFor="login-password">Your password</label>
            </div>
            <button className="btn yellow darken-2 z-depth-0">Login</button>
          </form>
        </div>
      </div>

      {/* Account Modal */}
      <div id="modal-account" className="modal">
        <div className="modal-content center-align">
          <h4>Account details</h4>
          <div className="account-details">
            {/* Display account details */}
          </div>
        </div>
      </div>
    </div>
  );
}
