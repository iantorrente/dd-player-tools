import React, { Component } from 'react';
import ExtraChoiceSnippet from './ExtraChoiceSnippet/ExtraChoiceSnippet.js';
import Race from '../../../../Data/Races.js';
import Languages from '../../../../Data/Languages.js';

class RaceSnippet extends Component {
  constructor(props) {
    super(props);
    this.handleExtraChoice = this.handleExtraChoice.bind(this);
    
    this.state = {
    };
  }

  findModifiers(race) {
    const statMods = ['strMod', 'dexMod', 'conMod', 'intMod', 'wisMod', 'chaMod'];
    const statName = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
    const modifiers = statMods.map((stat, i) => {
      if (race[statMods[i]] !== 0) {
        return (<p key={i}>{statName[i]} +{race[statMods[i]]}</p>)
      }
    });
    return modifiers;
  }

  getProficiencies(race) {
    if (race.proficiencies.length > 0) {
      const proficiencies = race.proficiencies.map((proficiency, i) => {
        return (
          <p key={i}>{proficiency}</p>
        )
      });
      return proficiencies;
    }
  }

  getFeatures(race) {
    if (race.features.length > 0) {
      const features = race.features.map((feature, i) => {
        return (
          <p key={i}>{feature}</p>
        )
      });
      return features;
    }
  }

  getLanguageOptions() {
    const languageOptions = Object.keys(Languages).map((language, i) => {
      return (
        <option key={i} value={language}>{language}</option>
      )
    });
    return languageOptions;
  }

  getExtraOptions(options) {
    if (options.language) {
      return (
        this.getLanguageOptions()
      )
    }
    
    const extraOptions = Object.keys(options).map((option, i) => {
      return (
        <option key={i}>
          {options[option].name}
        </option>
      )
    });
    return extraOptions;
  }

  findExtraChoices(race) {
    const raceChoices = race.raceChoices;
    if (Object.keys(raceChoices).length < 1) {
      return (
        <div>
          <h3>Extra Racial Choice:</h3>
          <p>No extra racial choices</p>
        </div>
      )
    }

    const choices = Object.keys(raceChoices).map((choice, i) => {
      return (
        <div key={i}>
          <h3>Extra Racial Choice: {raceChoices[choice].name}</h3>
          <select onChange={this.props.handleExtraChoice}>
            <option>{raceChoices[choice].name}:</option>
            {this.getExtraOptions(raceChoices[choice].options)}
          </select>
        </div>
      )
    });
    return choices;
  }

  handleExtraChoice(e) {
    const race = Race[this.props.race]
    const choiceVersion = race[e.target.id];
    const extraChoice = choiceVersion[e.target.value];
    const stateObj = { [e.target.id]: extraChoice };
    this.setState( stateObj );
  }

  render() {
    const selectedRace = Race[this.props.race];
    return (
      // change divs into sections inside of 'race-snippet'
      <div className='snippet'>
        <div className='modifiers-list'>
          <h3>Stat Modifiers:</h3>
          {this.findModifiers(selectedRace)}
        </div>

        <div className='proficiencies-list'>
          <h3>Proficiencies:</h3>
          {
            selectedRace.proficiencies.length > 0 ? this.getProficiencies(selectedRace) 
            : 'No proficiencies'
          }
        </div>

        <div className='features-list'>
          <h3>Features:</h3>
          {
            selectedRace.features.length > 0 ? this.getFeatures(selectedRace) 
            : 'No features'
          }
        </div>

        <div>
          <h3>Movement Speed:</h3>
          <p>{selectedRace.moveSpeed} ft.</p>
        </div>

        <div>
          <h3>Languages:</h3>
          <p>{selectedRace.languages[0]}, {selectedRace.languages[1]}</p>
        </div>

        <div className='extra-choices'>
          {this.findExtraChoices(selectedRace)}
        </div>
        <button className='commit-btn'>Commit</button>
      </div>
    );
  }
}

export default RaceSnippet;