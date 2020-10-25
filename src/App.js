import React from 'react';
import Produto from './Produto';
import { GlobalStorage } from './GlobalContext';
import Limpar from './Limpar';
const App = () => {
  return (
    <div>
      <GlobalStorage>
        <Produto />
        <Limpar />
      </GlobalStorage>
    </div>
  );
};
export default App;
