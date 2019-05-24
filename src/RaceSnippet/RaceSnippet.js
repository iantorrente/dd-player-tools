import React, { Component } from 'react';
import ExtraChoiceSnippet from './ExtraChoiceSnippet/ExtraChoiceSnippet.js';
import RACE from '../Data/Races.js';

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

  getExtraChoices(race, choiceNum) {
    const choiceVersion = `extraChoices${choiceNum}`;
    if (Object.keys(race[choiceVersion]).length > 0) {
      const extraChoices = Object.keys(race[choiceVersion]).map((extraChoice, i) => {
        return (
          <option key={i}>
            {extraChoice}
          </option>
        )
      });
      return extraChoices;
    }
  }

  handleExtraChoice(e) {
    const race = RACE[this.props.race]
    const choiceVersion = race[e.target.id];
    const extraChoice = choiceVersion[e.target.value];
    const stateObj = { [e.target.id]: extraChoice };
    this.setState( stateObj );
  }

  render() {
    const selectedRace = RACE[this.props.race];
    return (
      <div className='race-snippet'>
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
          <p>{selectedRace.moveSpeed}ft.</p>
        </div>

        <div>
          <h3>Languages:</h3>
          <p>{selectedRace.languages[0]}, {selectedRace.languages[1]}</p>
        </div>

        <div className='extra-choices'>
          <h3>Extra Racial Choices: {selectedRace.extraChoices1Name}</h3>
          <select id='extraChoices1' onChange={this.handleExtraChoice} >
            <option>{selectedRace.extraChoices1Name}</option>
            {this.getExtraChoices(selectedRace, 1)}
          </select>
          {
            selectedRace.name === 'halfElf' &&
              <select>
                <option>{selectedRace.extraChoices1Name}</option>
                {this.getExtraChoices(selectedRace, 1)}
              </select>
          }
          {
            ((this.state.extraChoices1) && (selectedRace.extraChoices1[this.state.extraChoices1.name]) && (selectedRace.name !== 'halfElf')) && 
              <ExtraChoiceSnippet choice={this.state.extraChoices1}/>
          }
        </div>
        {selectedRace.extraChoices2 && 
          <div className='extra-choices'>
            <h3>Extra Racial Choices 2: {selectedRace.extraChoices2Name}</h3>
            <select id='extraChoices2' onChange={this.handleExtraChoice} >
              <option>{selectedRace.extraChoices2Name}</option>
              {this.getExtraChoices(selectedRace, 2)}
            </select>
          </div>
        }
      </div>
    );
  }
}

export default RaceSnippet;