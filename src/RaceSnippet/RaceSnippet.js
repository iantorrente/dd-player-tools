import React, { Component } from 'react';
import RACE from '../Data/Races.js';

class RaceSnippet extends Component {
  constructor(props) {
    super(props);

  }
  state = {
    
  };

  findModifiers(race) {
    const statMods = ['strMod', 'dexMod', 'conMod', 'intMod', 'wisMod', 'chaMod'];
    const statName = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
    const modifiers = statMods.map((stat, i) => {
      if (race[statMods[i]] !== 0) {
        // modifiers.push(statName[i] + " +" + race[statMods[i]]);
        return (<li key={i}>{statName[i]} +{race[statMods[i]]}</li>)
      }
    });
    return modifiers;
  }

  getProficiencies(race) {
    if (race.proficiencies.length > 0) {
      const proficiencies = race.proficiencies.map((proficiency, i) => {
        return (
          <li key={i}>{proficiency}</li>
        )
      });
      return proficiencies;
    }
  }

  getFeatures(race) {
    if (race.features.length > 0) {
      const features = race.features.map((feature, i) => {
        return (
          <li key={i}>{feature}</li>
        )
      });
      return features;
    }
  }

  getExtraChoices(race) {
    if (race.extraChoices.length > 0) {
      const extraChoices = race.extraChoices.map((extraChoice, i) => {
        return (
          <option key={i}>
            {extraChoice.name}
          </option>
        )
      });
      return extraChoices;
    }
  }

  render() {
    const selectedRace = RACE[this.props.race];
    return (
      <div className='race-snippet'>
        <div>
          <ul className='modifiers-list'>
            <h4>Stat Modifiers:</h4>
            {this.findModifiers(selectedRace)}
          </ul>
        </div>
        <span>
          <ul className='proficiencies-list'>
            <h4>Proficiencies:</h4>
            {
              selectedRace.proficiencies.length > 0 ? this.getProficiencies(selectedRace) 
              : 'No proficiencies'
            }
          </ul>
        </span>
        <span>
          <ul className='features-list'>
            <h4>Features:</h4>
            {
              selectedRace.features.length > 0 ? this.getFeatures(selectedRace) 
              : 'No features'
            }
          </ul>
        </span>
        <p>Movement speed: {selectedRace.moveSpeed}ft.</p>
        <p>Languages: {selectedRace.languages[0]}, {selectedRace.languages[1]}</p>
        <div className='extra-choices'>
          <h4>Extra Racial Choices: {selectedRace.extraChoicesName}</h4>
          <select>
            {this.getExtraChoices(selectedRace)}
          </select>
        </div>
        {selectedRace.extraChoices2 && 
          <div className='extra-choices'>

          </div>
        }
      </div>
    );
  }
}

export default RaceSnippet;