import React from 'react';

import './styles.css';

export default function EmptyContent({ title, description, svg }) {
  return (
    <div className="container-nothing">
      <div className="content-nothing">
        <div className="svg-icon-nothing">
          {svg ? (svg) : (<svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 24 24" fill="none" stroke="#FB4A4D" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg>)}
        </div>
        <div className="text-nothing">
          <h3 className="title-for-nothing">{title ? (title) : ("Nenhum conteúdo aqui!")}</h3>
          <span>{description ? (description) : ("O conteúdo está vázio.")}</span>
        </div>
      </div>
    </div>
  );
}
