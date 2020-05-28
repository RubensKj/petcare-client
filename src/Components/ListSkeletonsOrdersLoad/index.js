import React from 'react';

import OrderSkeletonCardLoad from '../OrderSkeletonCardLoad';

import './styles.css';

export default function ListSkeletonsOrdersLoad({ numberCards }) {

  const times = [];

  if (numberCards !== null && numberCards !== undefined) {
    for (var i = 0; i < numberCards; i++) {
      times.push(i);
    }
  }

  return (
    <div className="list-skeleton-orders-card">
      {numberCards === undefined ? (<OrderSkeletonCardLoad />) : (times.map(number => <OrderSkeletonCardLoad key={number} />))}
    </div>
  );
}
