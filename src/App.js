import React from 'react';
import StatsContainer from './Stats/StatsContainer.js';
import STORE from './Store.js';

function App() {
  return (
    <main className='App'>
      <h1>D&D Player Tools</h1>
      <StatsContainer STORE={STORE} />
    </main>
  );
}

export default App;
