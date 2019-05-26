import React, { Component } from 'react';
import RaceSection from './CharacterCreation/RaceSection.js';
import ClassSection from './CharacterCreation/ClassSection.js';
import LevelSection from './CharacterCreation/LevelSection.js';
import BackgroundSection from './CharacterCreation/BackgroundSection.js';
import CharacterNameSection from './CharacterCreation/CharacterNameSection.js';
import AlignmentSection from './CharacterCreation/AlignmentSection.js';

class CharacterCreationView extends Component {
  constructor(props) {
    super(props);
    this.handleRaceSelection = this.handleRaceSelection.bind(this);
    this.handleClassSelection = this.handleClassSelection.bind(this);
    this.state = {
      raceSelected: '',
      classSelected: '',
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

  render() {
    console.log(this.state);
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
          handleClassSelection={this.handleClassSelection} 
        />
        <BackgroundSection step={3} />
        <CharacterNameSection step={4} />
        <AlignmentSection step={5} />
      </div>
    );
  }
}

export default CharacterCreationView;
