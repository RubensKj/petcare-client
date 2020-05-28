import React from 'react';

import './styles.css';

export default function AddressInfo({ text }) {
  return (
    <div className="address-info">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="12" cy="10" r="3" /><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" /></svg>
      <span>{text}</span>
    </div>
  );
}
