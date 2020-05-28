import React from 'react';

import './styles.css';

export default function Loading({ text, background, boxShadow }) {
  var style = {
    background: background,
    boxShadow: boxShadow,
  }

  return (
    // <div className="loading-api"><span data-text={text ? (text) : ("Carregando...")} >{text ? (text) : ("Carregando...")}</span></div>
    <div className="loading-api">
      <div className="loading-ui" style={style}>
        <span>{text ? (text) : ("Carregando...")}</span>
        <span><div className="loading-spinner"></div></span>
      </div>
    </div>
  );
}
