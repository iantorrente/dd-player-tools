import React from 'react';
import ReactDOM from 'react-dom';
import Backgrounds from '../Data/Backgrounds.js';
import BackgroundSection from '../Views/CharacterCreation/BackgroundSection/BackgroundSection.js';

describe('Class section', () => {
  const state = {
    data: {
      backgroundData: Backgrounds
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
      <BackgroundSection 
        data={state.data}
        pc={state.playerCharacter}
        handleBackgroundSelection={() => {}}
        handleLanguageSelection={() => {}}
      />
      , div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders with empty background data', () => {
    const div = document.createElement('div');
    const emptyData = {backgroundData: {}}
    ReactDOM.render(
      <BackgroundSection 
        data={emptyData}
        pc={state.playerCharacter}
        handleBackgroundSelection={() => {}}
        handleLanguageSelection={() => {}}
      />
      , div);
    ReactDOM.unmountComponentAtNode(div);
  })
})