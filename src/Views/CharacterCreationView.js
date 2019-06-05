import React, { Component } from 'react';
import RaceSection from './CharacterCreation/RaceSection/RaceSection.js';
import ClassSection from './CharacterCreation/ClassSection/ClassSection.js';
import BackgroundSection from './CharacterCreation/BackgroundSection/BackgroundSection.js';
import AlignmentSection from './CharacterCreation/AlignmentSection/AlignmentSection.js';
import Navigation from '../Navigation/Navigation.js';
import CharacterPreview from '../Modals/CharacterPreview.js';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class CharacterCreationView extends Component {
  constructor(props) {
    super(props);
    this.handleRaceSelection = this.handleRaceSelection.bind(this);
    this.handleClassSelection = this.handleClassSelection.bind(this);
    this.handleBackgroundSelection = this.handleBackgroundSelection.bind(this);
    this.handleAlignmentSelection = this.handleAlignmentSelection.bind(this);
    this.handleStatIncrease = this.handleStatIncrease.bind(this);
    this.handleStatDecrease = this.handleStatDecrease.bind(this);
    
    this.state = {
      raceSelected: '',
      classSelected: '',
      backgroundSelected: '',
      alignmentSelected: '',
      playerCharacter: {
        startingData: {
          strength: {initialValue: 8},
          constitution: {initialValue: 8},
          dexterity: {initialValue: 8},
          intelligence: {initialValue: 8},
          wisdom: {initialValue: 8},
          charisma: {initialValue: 8}
        },
        statPoints: 27,
        stats: {
          strength: 0,
          constitution: 0,
          dexterity: 0,
          intelligence: 0,
          wisdom: 0,
          charisma: 0
        }
      }
    }
  }

  handleStatIncrease(stat) {
    let pc = this.state.playerCharacter;
    if (pc.statPoints === 0) {
      alert('No more avaiable points to distribute');
    } else {
      pc.statPoints -= 1;
      pc.stats[stat] += 1;
      this.setState({ pc });
    }
  }

  handleStatDecrease(stat) {
    let pc = this.state.playerCharacter;
    pc.statPoints += 1;
    pc.stats[stat] -= 1;
    this.setState({ pc });
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
        <Link to='/character-creation/character-preview'>
          <button className='character-preview-btn'>Preview Character</button>
        </Link>
        <Navigation />
        <Route 
          path='/character-creation/character-preview'
          render={(props) => 
            <CharacterPreview 
              handleStatIncrease={this.handleStatIncrease} 
              handleStatDecrease={this.handleStatDecrease}
              pc={this.state.playerCharacter} 
            />
          }
        />
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
