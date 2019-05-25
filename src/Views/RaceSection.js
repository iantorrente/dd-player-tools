import React, { Component } from 'react';
import RaceSnippet from '../RaceSnippet/RaceSnippet.js';
import Races from '../Data/Races.js';

class RaceSection extends Component {
  getRaceOptions() {
    const raceOptions = Object.keys(Races).map(function(key, i) {
      return (
        <option key={i} value={key}>{key}</option>
      )
    });
    return raceOptions;
  }

  render() {
    const raceOptions = this.getRaceOptions();
    return(
      <div className='step-section'>
        <h2 className='cc-step'>Step 1: Choose a Race</h2>
        <select className='race-selection' onChange={this.props.handleRaceSelection} value={this.props.raceSelected}>
          <option>Races:</option>
          {raceOptions}
          {/* <option value="dragonborn">Dragonborn</option>
          <option value="dwarf">Dwarf</option>
          <option value="elf">Elf</option>
          <option value="gnome">Gnome</option>
          <option value="halfElf">Half Elf</option>
          <option value="halfling">Halfling</option>
          <option value="halfOrc">Half Orc</option>
          <option value="human">Human</option>
          <option value="tiefling">Tiefling</option> */}
        </select>
        {
          this.props.raceSelected !== '' &&
            <RaceSnippet pc={this.props.pc} race={this.props.raceSelected} />
        }
      </div>
    )
  }
}

export default RaceSection;