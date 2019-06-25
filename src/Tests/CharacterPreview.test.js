import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CharacterPreview from '../Modals/CharacterPreview.js';
import Races from '../Data/Races.js';
import Classes from '../Data/Classes.js';
import Backgrounds from '../Data/Backgrounds.js';
import Alignments from '../Data/Alignments.js';

describe('Character preview section', () => {
  const state = {
    data: {
      racesData: Races,
      classesData: Classes,
      backgroundData: Backgrounds,
      alignmentData: Alignments
    },
    playerCharacter: {
      stats: {
        strength: 8,
        constitution: 8,
        dexterity: 8,
        intelligence: 8,
        wisdom: 8,
        charisma: 8
      },
      skills: [],
      classProficiencies: [],
      classExtraLanguages: [],
      backgroundLanguages: [],
      equipmentChoices: {
        weapon: '',
        'secondary weapon': '',
        armor: '',
        pack: '',
        accessory: '',
        item: ''
      }
    }
  };
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <CharacterPreview 
          data={state.data}
          pc={state.playerCharacter}
          getRandomNumbers={() => {}}
          handleStatIncrease={() => {}} 
          handleStatDecrease={() => {}}
          handleCharacterSave={() => {}}
        />
      </Router>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with empty data', () => {
    const div = document.createElement('div');
    const emptyData = {
      racesData: {},
      classesData: {},
      backgroundData: {},
      alignmentData: {}
    }
    ReactDOM.render(
      <Router>
        <CharacterPreview 
          data={emptyData}
          pc={state.playerCharacter}
          getRandomNumbers={() => {}}
          handleStatIncrease={() => {}} 
          handleStatDecrease={() => {}}
          handleCharacterSave={() => {}}
        />
      </Router>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  })
})