import React, { Component } from 'react';
import RaceSection from './CharacterCreation/RaceSection/RaceSection.js';
import ClassSection from './CharacterCreation/ClassSection/ClassSection.js';
import BackgroundSection from './CharacterCreation/BackgroundSection/BackgroundSection.js';
import CharacterNameSection from './CharacterCreation/CharacterNameSection.js';
import AlignmentSection from './CharacterCreation/AlignmentSection.js';

class CharacterCreationView extends Component {
  constructor(props) {
    super(props);
    this.handleRaceSelection = this.handleRaceSelection.bind(this);
    this.handleClassSelection = this.handleClassSelection.bind(this);
    this.handleBackgroundSelection = this.handleBackgroundSelection.bind(this);
    this.state = {
      raceSelected: '',
      classSelected: '',
      backgroundSelected: '',
      playerCharacter: {}
    }
  }

  handleRaceSelection(e) {
    let pc = this.state.playerCharacter;
    pc.race = e.target.value;
    this.setState({ pc });
    this.setState({ raceSelected: e.target.value });
  }

  handleClassSelection(e) {
    let pc = this.state.playerCharacter;
    pc.class = e.target.value;
    this.setState({ pc });
    this.setState({ classSelected: e.target.value });
  }

  handleBackgroundSelection(e) {
    let pc = this.state.playerCharacter;
    pc.background = e.target.value;
    this.setState({ pc });
    this.setState({ backgroundSelected: e.target.value });
  }

  render() {
    return (
      <div className='character-creation-view'>
        <h1>Character Creator</h1>
        <RaceSection
          step={1}
          pc={this.state.playerCharacter} 
          raceSelected={this.state.raceSelected} handleRaceSelection={this.handleRaceSelection} 
        />
        <ClassSection
          step={2}
          pc={this.state.playerCharacter}
          classSelected={this.state.classSelected} 
          handleClassSelection={this.handleClassSelection} 
        />
        <BackgroundSection 
          step={3} 
          pc={this.state.playerCharacter}
          backgroundSelected={this.state.backgroundSelected}
          handleBackgroundSelection={this.handleBackgroundSelection}
        />
        <AlignmentSection step={4} />
        <CharacterNameSection step={5} />
      </div>
    );
  }
}

export default CharacterCreationView;
