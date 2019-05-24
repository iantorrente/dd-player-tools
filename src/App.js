import React from 'react';
import CharacterManagerView from './Views/CharacterManagerView.js';
import CharacterCreationView from './Views/CharacterCreationView.js';
import STATS from './Data/Stats.js';

function App() {
  return (
    <main className='App'>
      <CharacterCreationView STATS={STATS} />
      {/* <CharacterManagerView STATS={STATS} /> */}
    </main>
  );
}

export default App;
