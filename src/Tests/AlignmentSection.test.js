import React from 'react';
import ReactDOM from 'react-dom';
import Alignments from '../Data/Alignments.js';
import AlignmentSection from '../Views/CharacterCreation/AlignmentSection/AlignmentSection.js';

describe('Class section', () => {
  const state = {
    data: {
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
      <AlignmentSection 
        data={state.data}
        pc={state.playerCharacter}
        handleAlignmentSelection={() => {}}
      />
      , div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders with empty alignment data', () => {
    const div = document.createElement('div');
    const emptyData = {alignmentData: {}}
    ReactDOM.render(
      <AlignmentSection 
        data={emptyData}
        pc={state.playerCharacter}
        handleAlignmentSelection={() => {}}
      />
      , div);
    ReactDOM.unmountComponentAtNode(div);
  })
})