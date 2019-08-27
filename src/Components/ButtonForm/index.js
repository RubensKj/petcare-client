import React from 'react';

import './styles.css';

export default function ButtonForm({ text }) {
  return (
    <div className="button-area-form">
      <button className="button-form" type="submit">{text}</button>
    </div>
  );
}
