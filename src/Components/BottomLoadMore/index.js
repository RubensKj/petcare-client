import React from 'react';

import './styles.css';

export default function BottomLoadMore({ text, onClick, setClassName }) {
  return (
    <div className={setClassName ? ("button-load-more-to-pages " + setClassName) : ("button-load-more-to-pages")}>
      <button onClick={onClick}>{text ? (text) : ("Carregar")}</button>
    </div>
  );
}
