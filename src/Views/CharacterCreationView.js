import React, { Component } from 'react';
import RaceSection from './RaceSection.js';
import ClassSection from './ClassSection.js';
import LevelSection from './LevelSection.js';
import BackgroundSection from './BackgroundSection.js';
import CharacterNameSection from './CharacterNameSection.js';
import AlignmentSection from './AlignmentSection.js';

class CharacterCreationView extends Component {
  constructor(props) {
    super(props);
    this.handleRaceSelection = this.handleRaceSelection.bind(this);
    this.state = {
      raceSelected: 'dragonborn',
      playerCharacter: {}
    }
  }

  handleRaceSelection(e) {
    let pc = this.state.playerCharacter;
    pc.race = e.target.value;
    this.setState({ pc });
    this.setState({ raceSelected: e.target.value });
  }

  render() {
    console.log(this.state.playerCharacter);
    return (
      <div className='character-creation-view'>
        <h1>Character Creator</h1>
        <RaceSection pc={this.state.playerCharacter} raceSelected={this.state.raceSelected} handleRaceSelection={this.handleRaceSelection} />
        <ClassSection />
        <LevelSection />
        <BackgroundSection />
        <CharacterNameSection />
        <AlignmentSection />
      </div>
    );
  }
}

export default CharacterCreationView;
