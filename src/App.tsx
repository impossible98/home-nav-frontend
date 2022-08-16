// import third-party modules
import React from 'react';
import { useRoutes } from "react-router-dom";
// import local modules
import router from './router';

function App() {
  return useRoutes(router)
}

export default App
