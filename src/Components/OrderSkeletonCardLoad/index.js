import React from 'react';

import './styles.css';

export default function OrderSkeletonCardLoad() {
  return (
    <div className="skeleton-order-card">
      <div className="content-skeleton-card">
        <div className="title-area">
          <div className="load-title" />
        </div>
        <div className="content-area-order-load">
          <div className="area-load">
            <div className="load-cont" />
          </div>
          <div className="area-load">
            <div className="load-cont" />
          </div>
          <div className="area-load">
            <div className="load-cont" />
          </div>
          <div className="area-load">
            <div className="load-cont" />
          </div>
        </div>
      </div>
    </div>
  );
}
