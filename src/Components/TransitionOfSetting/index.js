import React from 'react';

import './styles.css';

export default function TransitionOfSetting({ title, description, errors, style }) {
  return (
    <div className="info-header-settings" style={style} >
      <div className="content-header-settings">
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
      <div className="content-error-settings">
        <span style={(errors ? ({ paddingTop: 10 + 'px' }) : ({ paddingTop: 0 + 'px' }))}>{errors}</span>
      </div>
    </div>
  );
}
