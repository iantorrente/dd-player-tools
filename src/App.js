import React from 'react';
import CharacterCreationView from './Views/CharacterCreationView.js';
import Landing from './Views/Landing.js';
import STATS from './Data/Stats.js';

function App() {
  return (
    <main className='App'>
      {/* <Landing /> */}
      <CharacterCreationView STATS={STATS} />
    </main>
  );
}

export default App;
