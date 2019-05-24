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
        <div className='modifiers-list'>
          <h3>Stat Modifiers:</h3>
          {this.findModifiers(selectedRace)}
        </div>
        <span className='proficiencies-list'>
          <h3>Proficiencies:</h3>
          {
            selectedRace.proficiencies.length > 0 ? this.getProficiencies(selectedRace) 
            : 'No proficiencies'
          }
        </span>
        <span className='features-list'>
          <h3>Features:</h3>
          {
            selectedRace.features.length > 0 ? this.getFeatures(selectedRace) 
            : 'No features'
          }
        </span>
        <div>
          <h3>Movement Speed:</h3>
          <p>{selectedRace.moveSpeed}ft.</p>
        </div>
        <div>
          <h3>Languages:</h3>
          <p>{selectedRace.languages[0]}, {selectedRace.languages[1]}</p>
        </div>
        <div className='extra-choices'>
          <h3>Extra Racial Choices: {selectedRace.extraChoicesName}</h3>
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