import React, { Component } from 'react';
import RaceSection from './CharacterCreation/RaceSection/RaceSection.js';
import ClassSection from './CharacterCreation/ClassSection/ClassSection.js';
import BackgroundSection from './CharacterCreation/BackgroundSection/BackgroundSection.js';
import CharacterNameSection from './CharacterCreation/CharacterNameSection.js';
import AlignmentSection from './CharacterCreation/AlignmentSection.js';
import Navigation from '../Navigation/Navigation.js';
import { Route } from 'react-router-dom';

class CharacterCreationView extends Component {
  constructor(props) {
    super(props);
    this.handleRaceSelection = this.handleRaceSelection.bind(this);
    this.handleClassSelection = this.handleClassSelection.bind(this);
    this.handleBackgroundSelection = this.handleBackgroundSelection.bind(this);
    this.handleAlignmentSelection = this.handleAlignmentSelection.bind(this);
    this.state = {
      raceSelected: 'dragonborn',
      classSelected: 'barbarian',
      backgroundSelected: 'acolyte',
      alignmentSelected: 'lawful good',
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

  handleAlignmentSelection(e) {
    let pc = this.state.playerCharacter;
    pc.alignment = e.target.value;
    this.setState({ pc });
    this.setState({ alignmentSelected: e.target.value });
  }

  render() {
    return (
      <div className='character-creation-view'>
        <h1>Character Creator</h1>
        <Navigation />
        <Route 
          path='/character-creation/race'
          render={(props) => 
            <RaceSection
              step={1}
              pc={this.state.playerCharacter} 
              raceSelected={this.state.raceSelected} handleRaceSelection={this.handleRaceSelection} 
            />}
        />
        <Route 
          path='/character-creation/class'
          render={(props) => 
            <ClassSection
              step={2}
              pc={this.state.playerCharacter}
              classSelected={this.state.classSelected} 
              handleClassSelection={this.handleClassSelection} 
            />}
        />
        <Route 
          path='/character-creation/background'
          render={(props) => 
            <BackgroundSection 
              step={3} 
              pc={this.state.playerCharacter}
              backgroundSelected={this.state.backgroundSelected}
              handleBackgroundSelection={this.handleBackgroundSelection}
            />}
        />
        <Route 
          path='/character-creation/alignment'
          render={(props) => 
            <AlignmentSection 
              step={4} 
              pc={this.state.playerCharacter}
              alignmentSelected={this.state.alignmentSelected}
              handleAlignmentSelection={this.handleAlignmentSelection}
            />}
        />
      </div>
    );
  }
}

export default CharacterCreationView;
