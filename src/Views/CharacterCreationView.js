import React, { Component } from 'react';
import StatsContainer from '../Stats/StatsContainer.js';
import RaceSnippet from '../RaceSnippet/RaceSnippet.js';
import RACES from '../Data/Races.js';

class CharacterCreationView extends Component {
  constructor(props) {
    super(props);
    this.handleRaceSelection = this.handleRaceSelection.bind(this);
  }
  state = {
    raceSelected: 'dragonborn'
  }

  handleRaceSelection(e) {
    this.setState({ raceSelected: e.target.value });
    console.log(e.target.value);
  }

  render() {
    return (
      <div className='character-creation-view'>
        <h1>Character Creator</h1>
        <div className='step-section'>
          <h2 className='cc-step'>Step 1: Choose a Race</h2>
          <select className='race-selection' onChange={this.handleRaceSelection} value={this.state.raceSelected}>
            <option value="dragonborn">Dragonborn</option>
            <option value="dwarf">Dwarf</option>
            <option value="elf">Elf</option>
            <option value="gnome">Gnome</option>
            <option value="halfElf">Half Elf</option>
            <option value="halfling">Halfling</option>
            <option value="halfOrc">Half Orc</option>
            <option value="human">Human</option>
            <option value="tiefling">Tiefling</option>
          </select>
          <RaceSnippet race={this.state.raceSelected} />
        </div>
        <div className='step-section'>
          <h2 className='cc-step'>Step 2: Choose a Class</h2>
        </div>
        <div className='step-section'>
          <h2 className='cc-step'>Step 3: Set a Starting Level</h2>
        </div>
        <div className='step-section'>
          <h2 className='cc-step'>Step 4: Choose a Background</h2>
        </div>
        <div className='step-section'>
          <h2 className='cc-step'>Step 5: Name Your Character</h2>
        </div>
        <div className='step-section'>
          <h2 className='cc-step'>Step 6: Choose an Alignment</h2>
        </div>
      </div>
    );
  }
}

export default CharacterCreationView;
