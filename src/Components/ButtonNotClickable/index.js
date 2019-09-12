import React from 'react';

import './styles.css';

export default function ButtonNotClickable({ text }) {
  return (
    <div className="button-area-not-clickable">
      <button className="button-action-not-clickable">{text}</button>
    </div>
  );
}
