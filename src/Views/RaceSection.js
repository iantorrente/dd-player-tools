import React, { Component } from 'react';
import RaceSnippet from '../RaceSnippet/RaceSnippet.js';

class RaceSection extends Component {
  render() {
    return(
      <div className='step-section'>
        <h2 className='cc-step'>Step 1: Choose a Race</h2>
        <select className='race-selection' onChange={this.props.handleRaceSelection} value={this.props.raceSelected}>
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
        <RaceSnippet pc={this.props.pc} race={this.props.raceSelected} />
      </div>
    )
  }
}

export default RaceSection;