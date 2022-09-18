import React from 'react';

import { Calculator } from './components/Calculator';
import { Info } from './components/Info';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper d-flex justify-between">
      <Info />
      <Calculator />
    </div>
  );
}

export default App;
