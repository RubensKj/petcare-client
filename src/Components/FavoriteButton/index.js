import React from 'react';

import './styles.css';

export default function FavoriteButton({ favorite, stroke, fill, onClick }) {
  return (
    <div className={favorite ? ('favorite button-favorite-design favorited-by-user') : ('favorite button-favorite-design')} role="button" onClick={onClick}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill={fill ? (fill) : ("none")} stroke={stroke ? (stroke) : ("currentColor")} strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      <button>{!favorite ? ("Favoritar") : ("Desfavoritar")}</button>
    </div>
  );
}
