import ReactDOM from 'react-dom';
import React from 'react';

function renderApp() {
  const App = require('./app').default;
  ReactDOM.render(<App />, document.getElementById('root'));
}

if (module.hot) module.hot.accept();
renderApp();
