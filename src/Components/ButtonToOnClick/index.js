import React from 'react';

import './styles.css';

export default function ButtonForm({ text, onClick }) {
  return (
    <div className="button-area-action" onClick={onClick}>
      <button className="button-action">{text}</button>
    </div>
  );
}
