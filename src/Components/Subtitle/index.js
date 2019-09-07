import React from 'react';

import './styles.css';

export default function Subtitle({ text }) {
  return (
    <div className="subtitle-content">
      <h2>{text}</h2>
      <div className="transition-small-below-subtitle" />
    </div>
  );
}
