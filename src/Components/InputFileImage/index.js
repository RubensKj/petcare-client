import React from 'react';

import ProductLogo from '../../Assets/ProductLogo.svg';

import './styles.css';

export default function InputFileImage({ onChange, onChangeText, image, alt }) {
  return (
    <div className="input-file">
      <label htmlFor="input-image-company" >
        <img src={image ? (image) : (ProductLogo)} alt={alt ? (alt) : ("Logo")} />
      </label>
      <label className="name-file">{onChangeText}</label>
      <input id="input-image-company" type="file" style={{ display: 'none' }} onChange={onChange} />
    </div>
  );
}
