import React from 'react';

export default function MainContent({ showEventDetails, fetchedEventData }) {
  return (
    <div className="main-content">
      <div className="container">
        <div className="background-image"></div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">You're Invited</div>
            <div className="card-back">
              {showEventDetails && fetchedEventData && (
                <div className="displayingbackend">
                  <h2 className="mydata">Events Details</h2>
                  <ul>
                    {fetchedEventData.map((item) => (
                      <li key={item.eventId}>
                       <strong>{item.eventName}</strong>, <strong>Date:</strong> {item.eventDate}, <strong>Headcount:</strong> {item.headCount}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <button className="trash-button"><i className="gg-trash"></i></button>
              <button className="cloud-button"><i className="gg-cloud"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
