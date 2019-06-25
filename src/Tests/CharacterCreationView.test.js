import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CharacterCreationView from '../Views/CharacterCreationView.js';

describe('Character creation view', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <CharacterCreationView />
      </Router>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
})