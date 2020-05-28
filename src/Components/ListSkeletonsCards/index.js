import React from 'react';

import SkeletonsCompanyCardLoading from '../SkeletonsCompanyCardLoading';

import './styles.css';

export default function ListSkeletonsCards({ numberCards }) {

  const times = [];

  if (numberCards !== null && numberCards !== undefined) {
    for (var i = 0; i < numberCards; i++) {
      times.push(i);
    }
  }

  return (
    <div className="list-skeleton-cards">
      {numberCards === undefined ? (<SkeletonsCompanyCardLoading />) : (times.map(number => <SkeletonsCompanyCardLoading key={number} />))}
    </div>
  );
}
