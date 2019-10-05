import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../application/components/App2';

const render = (App) => hydrate(<App />, document.getElementById('root'));

const theApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('../application/components/App2.js', () => {
    const theApp = require('../application/components/App2').default; // eslint-ignore-line
    render(theApp);
  });
}

render(theApp);