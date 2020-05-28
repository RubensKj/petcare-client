import React from 'react';

import './styles.css';

export default function TextArea({ type, value, placeholder, onChange }) {
  return (
    <div className="description-area">
      <textarea type={type} value={value} placeholder={placeholder} onChange={onChange} />
    </div>
  );
}
