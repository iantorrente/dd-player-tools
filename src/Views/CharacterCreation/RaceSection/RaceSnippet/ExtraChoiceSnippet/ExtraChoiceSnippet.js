import React, { Component } from 'react';
import Races from '../../../../../Data/Races.js';

class ExtraChoiceSnippet extends Component {
  findKeys() {
    const options = Races[this.props.pc.race].raceChoices[this.props.pc.extraRaceChoice].options;
  }

  render() {
    const race = Races[this.props.pc.race];
    const raceChoiceOptions = race.raceChoices[this.props.pc.extraRaceChoiceSource].options;
    console.log(this.props.pc.extraRaceChoice.toLowerCase());
    return (
      <div className='extra-choice-snippet'>
        <h3>{raceChoiceOptions[this.props.pc.extraRaceChoice.toLowerCase()].name}</h3>
      </div>
    );
  }
}

export default ExtraChoiceSnippet;