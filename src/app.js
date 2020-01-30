import { register, render as renderRoutes } from 'utils/routing';

import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import routes from 'routes';

function App() {
  register(routes, window.location.pathname);
  return <BrowserRouter>{renderRoutes({ routes, originalUrl: window.location.pathname })}</BrowserRouter>;
}

export default App;
