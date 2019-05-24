import React from 'react';
import CharacterCreationView from './Views/CharacterCreationView.js';
import STATS from './Data/Stats.js';

function App() {
  return (
    <main className='App'>
      <CharacterCreationView STATS={STATS} />
    </main>
  );
}

export default App;
