import React, { Component } from 'react';
import RaceSection from './CharacterCreation/RaceSection/RaceSection.js';
import ClassSection from './CharacterCreation/ClassSection/ClassSection.js';
import BackgroundSection from './CharacterCreation/BackgroundSection/BackgroundSection.js';
import AlignmentSection from './CharacterCreation/AlignmentSection/AlignmentSection.js';
import Navigation from '../Navigation/Navigation.js';
import CharacterPreview from '../Modals/CharacterPreview.js';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class CharacterCreationView extends Component {
  constructor(props) {
    super(props);
    this.handleRaceSelection = this.handleRaceSelection.bind(this);
    this.handleExtraRaceChoice = this.handleExtraRaceChoice.bind(this);
    this.handleClassSelection = this.handleClassSelection.bind(this);
    this.handleBackgroundSelection = this.handleBackgroundSelection.bind(this);
    this.handleAlignmentSelection = this.handleAlignmentSelection.bind(this);
    this.handleSkillSelection = this.handleSkillSelection.bind(this);
    this.handleLanguageSelection = this.handleLanguageSelection.bind(this);
    this.handleEquipmentSelection = this.handleEquipmentSelection.bind(this);
    this.handleProficiencySelection = this.handleProficiencySelection.bind(this);
    this.setActiveTab = this.setActiveTab.bind(this);
    // this.handleCharacterSave = this.handleCharacterSave.bind(this);
    this.randomizeStats = this.randomizeStats.bind(this);

    this.state = {
      componentData: {
        activeTab: 'race'
      },
      data: {
        raceData: {},
        classData: {},
        backgroundData: {},
        alignmentData: {}
      },
      raceSelected: '',
      classSelected: '',
      backgroundSelected: '',
      alignmentSelected: '',
      extraRaceChoice: '',
      extraRaceChoiceSource: '',
      playerCharacter: {
        stats: {
          strength: 8,
          constitution: 8,
          dexterity: 8,
          intelligence: 8,
          wisdom: 8,
          charisma: 8
        },
        skills: [],
        classProficiencies: [],
        classExtraLanguages: [],
        backgroundLanguages: [],
        equipmentChoices: {
          weapon: '',
          'secondary weapon': '',
          armor: '',
          pack: '',
          accessory: '',
          item: ''
        }
      }
    }
  }

  componentDidMount() {
    const { API_ENDPOINT } = require('../config.js');
    this.fetchRaceData(API_ENDPOINT);
    this.fetchClassData(API_ENDPOINT);
    this.fetchBackgroundData(API_ENDPOINT);
    this.fetchAlignmentData(API_ENDPOINT);
  }

  fetchRaceData(API_ENDPOINT) {
    fetch(`${API_ENDPOINT}api/races-data`)
    .then(results => {
      return results.json();
    })
    .then(data => {
      let stateData = this.state.data;
      data.map((data, i) => {
        stateData.raceData = {...stateData.raceData, ...data.race_data}
      })
      this.setState({ stateData });
    })
  }

  fetchClassData(API_ENDPOINT) {
    fetch(`${API_ENDPOINT}api/classes-data`)
    .then(results => {
      return results.json();
    })
    .then(data => {
      let stateData = this.state.data;
      data.map((data, i) => {
        stateData.classData = {...stateData.classData, ...data.class_data}
      })
      this.setState({ stateData })
    })
  }

  fetchBackgroundData(API_ENDPOINT) {
    fetch(`${API_ENDPOINT}api/backgrounds-data`)
    .then(results => {
      return results.json();
    })
    .then(data => {
      let stateData = this.state.data;
      data.map((data, i) => {
        stateData.backgroundData = {...stateData.backgroundData, ...data.background_data}
      })
      this.setState({ stateData })
    })
  }

  fetchAlignmentData(API_ENDPOINT) {
    fetch(`${API_ENDPOINT}api/alignments-data`)
    .then(results => {
      return results.json();
    })
    .then(data => {
      let stateData = this.state.data;
      data.map((data, i) => {
        stateData.alignmentData = {...stateData.alignmentData, ...data.alignment_data}
      })
      this.setState({ stateData })
    })
  }

  findLowestNumber(numArray) {
    let numbersArray = numArray;
    let lowestNum = Math.min(...numbersArray);
    let lowestNumIndex = numbersArray.indexOf(lowestNum);
    numbersArray.splice(lowestNumIndex, 1);
    return numbersArray;
  }

  getRandomNumbers() {
    let randomNum1 = Math.floor((Math.random() * 5) + 1);
    let randomNum2 = Math.floor((Math.random() * 5) + 1);
    let randomNum3 = Math.floor((Math.random() * 5) + 1);
    let randomNum4 = Math.floor((Math.random() * 5) + 1);
    let randomNumbers = this.findLowestNumber([randomNum1, randomNum2, randomNum3, randomNum4])
    return randomNumbers;
    //return the sum of the three remaining numbers
  }

  getRandomStatValue() {
    let randomNumbers = this.getRandomNumbers();
    let sum = randomNumbers.reduce((total, num) => {
      return total + num
    });
    return sum;
  }

  randomizeStats() {
    const stats = this.state.playerCharacter.stats;
    let pc = this.state.playerCharacter;
    Object.keys(stats).forEach((stat) => {
      pc.stats[stat] = this.getRandomStatValue();
      this.setState({ pc });
    })
  }

  handleEquipmentSelection(e) {
    let pc = this.state.playerCharacter;
    const selectedIndex = e.target.selectedIndex;
    const type = e.target[selectedIndex].parentElement.getAttribute('type');

    pc.equipmentChoices[type] = e.target.value;

    this.setState({ pc });
  }

  handleSkillSelection(e) {
    if (e.target.value !== 'Skills:') {
      let pc = this.state.playerCharacter;
      const selectedIndex = e.target.selectedIndex;
      const optionIndex = e.target[selectedIndex].parentElement.getAttribute('index');
      pc.skills.splice(optionIndex, 1, e.target.value);
      this.setState({ pc });
    }
  }

  handleLanguageSelection(e) {
    let pc = this.state.playerCharacter;
    const selectedIndex = e.target.selectedIndex;
    const optionIndex = e.target[selectedIndex].parentElement.getAttribute('index');
    const source = e.target[selectedIndex].parentElement.getAttribute('source');

    if (source === 'class') {
      pc.classExtraLanguages.splice(optionIndex, 1, e.target.value);
      this.setState({ pc });
    }

    if (source === 'background') {
      pc.backgroundLanguages.splice(optionIndex, 1, e.target.value);
      this.setState({ pc });
    }
  }

  handleProficiencySelection(e) {
    let pc = this.state.playerCharacter;
    const selectedIndex = e.target.selectedIndex;
    const optionIndex = e.target[selectedIndex].parentElement.getAttribute('index');

    pc.classProficiencies.splice(optionIndex, 1, e.target.value);
    this.setState({ pc });
  }

  handleRaceSelection(e) {
    let pc = this.state.playerCharacter;
    pc.race = e.target.value;
    pc.extraRaceChoice = '';
    pc.extraRaceChoiceSource = '';
    this.setState({ pc });
    this.setState({ raceSelected: e.target.value });
  }

  handleExtraRaceChoice(e) {
    let pc = this.state.playerCharacter;
    const selectedIndex = e.target.selectedIndex;
    const source = e.target[selectedIndex].parentElement.getAttribute('source');
    //If source = 'ability score increase' or 'skill versatility' then add them to the stats and the features instead of the extraRaceChoice
    pc.extraRaceChoice = e.target.value;
    pc.extraRaceChoiceSource = source;
    this.setState({ pc });
  }

  handleClassSelection(e) {
    let pc = this.state.playerCharacter;
    pc.class = e.target.value;
    pc.skills = [];
    this.setState({ pc });
    this.setState({ classSelected: e.target.value });
  }

  handleBackgroundSelection(e) {
    let pc = this.state.playerCharacter;
    pc.background = e.target.value;
    this.setState({ pc });
    this.setState({ backgroundSelected: e.target.value });
  }

  handleAlignmentSelection(e) {
    let pc = this.state.playerCharacter;
    pc.alignment = e.target.value;
    this.setState({ pc });
    this.setState({ alignmentSelected: e.target.value });
  }

  setActiveTab(e) {
    let componentData = this.state.componentData;
    const source = e.target.getAttribute('source');
    componentData.activeTab = source;
    this.setState({ componentData });
  }

  render() {
    return (
      <div className='character-creation-view'>
        <Navigation 
          setActiveTab={this.setActiveTab}
          state={this.state} 
        />
        <Route 
          path='/character-creation/character-preview'
          render={(props) => 
            <CharacterPreview
              data={this.state.data}
              pc={this.state.playerCharacter} 
              getRandomNumbers={this.randomizeStats}
              handleStatIncrease={this.handleStatIncrease} 
              handleStatDecrease={this.handleStatDecrease}
              handleCharacterSave={this.handleCharacterSave}
            />
          }
        />
        <Route 
          path='/character-creation/race'
          render={(props) => 
            <RaceSection
              step={1}
              data={this.state.data}
              pc={this.state.playerCharacter} 
              handleRaceSelection={this.handleRaceSelection} 
              handleExtraRaceChoice={this.handleExtraRaceChoice}
            />}
        />
        <Route 
          path='/character-creation/class'
          render={(props) => 
            <ClassSection
              step={2}
              data={this.state.data}
              pc={this.state.playerCharacter}
              handleProficiencySelection={this.handleProficiencySelection}
              handleSkillSelection={this.handleSkillSelection}
              handleClassSelection={this.handleClassSelection}
              handleLanguageSelection={this.handleLanguageSelection}
              handleEquipmentSelection={this.handleEquipmentSelection}
            />}
        />
        <Route 
          path='/character-creation/background'
          render={(props) => 
            <BackgroundSection 
              step={3} 
              pc={this.state.playerCharacter}
              data={this.state.data}
              handleBackgroundSelection={this.handleBackgroundSelection}
              handleLanguageSelection={this.handleLanguageSelection}
            />}
        />
        <Route 
          path='/character-creation/alignment'
          render={(props) => 
            <AlignmentSection 
              step={4} 
              pc={this.state.playerCharacter}
              data={this.state.data}
              handleAlignmentSelection={this.handleAlignmentSelection}
            />}
        />
        <div className='character-preview-nav'>
          <Link onClick={this.setActiveTab} to='/character-creation/character-preview'>
            <button source='character-preview'  className='character-preview-btn'>Preview Character</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CharacterCreationView;
