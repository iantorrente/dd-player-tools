import React, { Component } from 'react';
import RaceSnippet from './RaceSnippet/RaceSnippet.js';
import Races from '../../../Data/Races.js';

class RaceSection extends Component {
  getRaceOptions() {
    const raceOptions = Object.keys(Races).map(function(key, i) {
      return (
        <option key={i} value={key}>{Races[key].name}</option>
      )
    });
    return raceOptions;
  }

  render() {
    const raceOptions = this.getRaceOptions();
    console.log(`raceSelected: ${this.props.raceSelected}`)
    return(
      <div className='step-section'>
        <h2 className='cc-step'>Step {this.props.step}: Choose a Race</h2>
        <select className='race-selection' onChange={this.props.handleRaceSelection} value={this.props.raceSelected}>
          <option>Races:</option>
          {raceOptions}
        </select>
        {
          (Races[this.props.raceSelected] !== undefined) &&
            <RaceSnippet pc={this.props.pc} race={this.props.raceSelected} />
        }
      </div>
    )
  }
}

export default RaceSection;