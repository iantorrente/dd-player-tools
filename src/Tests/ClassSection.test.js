import React from 'react';
import ReactDOM from 'react-dom';
import Classes from '../Data/Classes.js';
import ClassSection from '../Views/CharacterCreation/ClassSection/ClassSection.js';

describe('Class section', () => {
  const state = {
    data: {
      classData: Classes
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
      <ClassSection 
        data={state.data}
        pc={state.playerCharacter}
        handleProficiencySelection={() => {}}
        handleSkillSelection={() => {}}
        handleClassSelection={() => {}}
        handleLanguageSelection={() => {}}
        handleEquipmentSelection={() => {}}
      />
      , div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders with empty class data', () => {
    const div = document.createElement('div');
    const emptyData = {classData: {}}
    ReactDOM.render(
      <ClassSection 
        data={emptyData}
        pc={state.playerCharacter}
        handleProficiencySelection={() => {}}
        handleSkillSelection={() => {}}
        handleClassSelection={() => {}}
        handleLanguageSelection={() => {}}
        handleEquipmentSelection={() => {}}
      />
      , div);
    ReactDOM.unmountComponentAtNode(div);
  })
})