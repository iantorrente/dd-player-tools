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
    this.handleClassSelection = this.handleClassSelection.bind(this);
    this.handleBackgroundSelection = this.handleBackgroundSelection.bind(this);
    this.handleAlignmentSelection = this.handleAlignmentSelection.bind(this);
    this.handleSkillSelection = this.handleSkillSelection.bind(this);
    this.handleLanguageSelection = this.handleLanguageSelection.bind(this);
    this.handleEquipmentSelection = this.handleEquipmentSelection.bind(this);
    this.randomizeStats = this.randomizeStats.bind(this);

    this.state = {
      raceSelected: '',
      classSelected: '',
      backgroundSelected: '',
      alignmentSelected: '',
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

  // NOT NEEDED NOW THAT STAT RANDOMIZATION IS IMPLEMENTED
  // handleStatIncrease(stat) {
  //   let pc = this.state.playerCharacter;
  //   if (pc.statPoints === 0) {
  //     alert('No more avaiable points to distribute');
  //   } else {
  //     pc.statPoints -= 1;
  //     pc.stats[stat] += 1;
  //     this.setState({ pc });
  //   }
  // }

  // handleStatDecrease(stat) {
  //   let pc = this.state.playerCharacter;
  //   pc.statPoints += 1;
  //   pc.stats[stat] -= 1;
  //   this.setState({ pc });
  // }

  handleEquipmentSelection(e) {
    let pc = this.state.playerCharacter;
    const selectedIndex = e.target.selectedIndex;
    const type = e.target[selectedIndex].parentElement.getAttribute('type');
    console.log(type);

    pc.equipmentChoices[type] = e.target.value;

    this.setState({ pc });
    console.log(this.state.playerCharacter);
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
    console.log(this.state.playerCharacter);
  }

  handleRaceSelection(e) {
    let pc = this.state.playerCharacter;
    pc.race = e.target.value;
    this.setState({ pc });
    this.setState({ raceSelected: e.target.value });
  }

  handleClassSelection(e) {
    let pc = this.state.playerCharacter;
    pc.class = e.target.value;
    pc.skills = [];
    this.setState({ pc });
    this.setState({ classSelected: e.target.value });
    console.log(pc);
  }

  handleBackgroundSelection(e) {
    let pc = this.state.playerCharacter;
    pc.background = e.target.value;
    this.setState({ pc });
    this.setState({ backgroundSelected: e.target.value });
    console.log(pc);
  }

  handleAlignmentSelection(e) {
    let pc = this.state.playerCharacter;
    pc.alignment = e.target.value;
    this.setState({ pc });
    this.setState({ alignmentSelected: e.target.value });
  }

  render() {
    return (
      <div className='character-creation-view'>
        <h1>Character Creator</h1>
        <Link to='/character-creation/character-preview'>
          <button className='character-preview-btn'>Preview Character</button>
        </Link>
        <Navigation />
        <Route 
          path='/character-creation/character-preview'
          render={(props) => 
            <CharacterPreview
              getRandomNumbers={this.randomizeStats}
              handleStatIncrease={this.handleStatIncrease} 
              handleStatDecrease={this.handleStatDecrease}
              pc={this.state.playerCharacter} 
            />
          }
        />
        <Route 
          path='/character-creation/race'
          render={(props) => 
            <RaceSection
              step={1}
              pc={this.state.playerCharacter} 
              raceSelected={this.state.raceSelected} handleRaceSelection={this.handleRaceSelection} 
            />}
        />
        <Route 
          path='/character-creation/class'
          render={(props) => 
            <ClassSection
              step={2}
              pc={this.state.playerCharacter}
              classSelected={this.state.classSelected} 
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
              backgroundSelected={this.state.backgroundSelected}
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
              alignmentSelected={this.state.alignmentSelected}
              handleAlignmentSelection={this.handleAlignmentSelection}
            />}
        />
      </div>
    );
  }
}

export default CharacterCreationView;
