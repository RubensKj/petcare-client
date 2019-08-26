import React from 'react';

import './styles.css';

export default function StatusInfo({ text }) {
  return (
    <div className="status-info">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
      <span>{text}</span>
    </div>
  );
}
