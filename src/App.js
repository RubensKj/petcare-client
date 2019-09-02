import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import Store from './Store';

import './styles.css';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
