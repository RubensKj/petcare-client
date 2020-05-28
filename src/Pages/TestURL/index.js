import React from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import ModalQuantityStore from '../../Components/ModalQuantityStore';

import './styles.css';

export default function TestingOrderCardLoad(props) {
  return (
    <>
      <HeaderMainPage props={props} />
      <div className="container-test">
        <div className="content-test">
          <ModalQuantityStore />
        </div>
      </div>
    </>
  );
}
