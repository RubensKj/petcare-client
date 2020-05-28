import React from 'react';

import './styles.css';

export default function BottomProductOpenInfo({ svg, onClick }) {
  return (
    <div className="bottom-to-show-info" role="button" onClick={onClick}>
      <div className="button-close">
        {svg === undefined ? (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ec910a" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><path d="M6 9l6 6 6-6"/></svg>) : (svg)}
      </div>
    </div>
  );
}
