import React from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import ListSkeletonsOrdersLoad from '../../Components/ListSkeletonsOrdersLoad';

import './styles.css';

export default function TestingOrderCardLoad(props) {
  return (
    <>
      <HeaderMainPage props={props} />
      <div className="container-test">
        <div className="content-test">
          <ListSkeletonsOrdersLoad numberCards={4} />
        </div>
      </div>
    </>
  );
}
