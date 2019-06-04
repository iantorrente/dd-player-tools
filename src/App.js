import React from 'react';
import CharacterCreationView from './Views/CharacterCreationView.js';
import Landing from './Views/Landing.js';
import { Route } from 'react-router-dom';

function App() {
  return (
    <main className='App'>
      <Route exact path='/' component={Landing} />
      <Route path='/character-creation' component={CharacterCreationView} />
      {/* <Landing />
      <CharacterCreationView /> */}
    </main>
  );
}

export default App;
