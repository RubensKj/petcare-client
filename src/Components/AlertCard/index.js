import React from 'react';

import './styles.css';

export default function AlertCard({ alert }) {

  function handleCloseAlert() {
    let alertCard = document.getElementById('alert-card');
    alertCard.classList.remove('opened-alert-card');
  }

  return (
    <div id="alert-card" className={alert.titleError ? ('alert-card opened-alert-card') : ('alert-card')}>
      <div className="content-alert">
        <div className="icon">
          {alert.successed ? (<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#7bbb5e" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><polyline points="20 6 9 17 4 12"></polyline></svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#FB4A4D" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>)}
        </div>
        <div className="text-area">
          <h3>{alert.titleError}</h3>
          <span>{alert.descriptionError}</span>
        </div>
        <div className="x-alert" role="button" onClick={handleCloseAlert}>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#ebeced" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
      </div>
    </div>
  );
}
