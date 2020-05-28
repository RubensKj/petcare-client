import React from 'react';

import './styles.css';

export default function Input({ type, value, name, placeholder, messageBottom, onChange, autoComplete, min, max, step, readOnly, defaultValue, disabled, style }) {
  return (
    <div className="input-area" style={style}>
      <div className="input-div inputed">
        <input className="input-basic" type={type} value={value} name={name} placeholder={placeholder} onChange={onChange} autoComplete={autoComplete} min={min} max={max ? (max) : ("1000.00")} step={step} readOnly={readOnly} defaultValue={defaultValue} disabled={disabled ? (disabled) : (false)} />
      </div>
      <span>{messageBottom}</span>
    </div>
  );
}
