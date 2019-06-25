import React from 'react';
import ReactDOM from 'react-dom';
import RaceSection from '../Views/CharacterCreation/RaceSection/RaceSection.js';
import Races from '../Data/Races.js';

describe('Race section', () => {
  const state = {
    data: {
      raceData: Races
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
      <RaceSection 
        data={state.data}
        pc={state.playerCharacter}
        handleRaceSelection={() => {}}
        handleExtraRaceChoice={() => {}}
      />
      , div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders with empty race data', () => {
    const div = document.createElement('div');
    const emptyData = {raceData: {}}
    ReactDOM.render(
      <RaceSection 
        data={emptyData}
        pc={state.playerCharacter}
        handleRaceSelection={() => {}}
        handleExtraRaceChoice={() => {}}
      />
      , div);
    ReactDOM.unmountComponentAtNode(div);
  })
})