import React from 'react';

import './styles.css';

export default function RedirectButton({ href, text }) {
  return (
    <a href={href} className="evaluation-route">
      <span>{text}</span>
    </a>
  );
}
