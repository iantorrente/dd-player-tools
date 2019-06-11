import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ExtraChoiceSnippet from './ExtraChoiceSnippet/ExtraChoiceSnippet.js';
import Races from '../../../../Data/Races.js';
import Languages from '../../../../Data/Languages.js';

class RaceSnippet extends Component {
  findModifiers(race) { 
    const modifiers = Object.keys(race.statModifiers).map((stat, i) => {
      if (race.statModifiers[stat] !== 0) {
        return (<p key={i}>{stat} +{race.statModifiers[stat]}</p>)
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
      const choiceOptions = raceChoices[choice].options;
      return (
        <div key={i}>
          <h3>Extra Racial Choice: {raceChoices[choice].name}</h3>
          <select 
            value={this.props.pc.extraRaceChoice ? this.props.pc.extraRaceChoice : raceChoices[choice].name}
            source={choice} 
            onChange={this.props.handleExtraRaceChoice}>
            <option>{raceChoices[choice].name}:</option>
            {this.getExtraOptions(raceChoices[choice].options)}
          </select>
        </div>
      )
    });
    return choices;
  }

  render() {
    const selectedRace = Races[this.props.pc.race];
    console.log(this.props.pc.race);
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
          {
            (Races[this.props.pc.race].raceChoices[this.props.pc.extraRaceChoiceSource] !== undefined
            && this.props.pc.race !== 'halfElf' && this.props.pc.race !== 'human') &&
              <ExtraChoiceSnippet pc={this.props.pc} />
          }
        </div>
        <Link to='/character-creation/class'>
          <button className='commit-btn'>Commit</button>
        </Link>
      </div>
    );
  }
}

export default RaceSnippet;