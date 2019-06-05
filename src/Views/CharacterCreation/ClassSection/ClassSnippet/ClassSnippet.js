import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CLASSES from '../../../../Data/Classes.js';
import LANGUAGES from '../../../../Data/Languages.js';

class ClassSnippet extends Component {
  getClassOptions(selectedClass, option) {
    const classOptions = selectedClass.classOptions;
    let returnOptions = '';
    if (classOptions[option].type === 'language') {
      returnOptions = Object.keys(LANGUAGES).map((language, i) => {
        return (
          <option key={i} value={language}>{language}</option>
        )
      })
    } else {
      returnOptions = classOptions[option].options.map((opt, i) => {
        return (
          <option key={i} value={opt}>{opt}</option>
        )
      })
    }

    return returnOptions;
  }

  findClassOptions(selectedClass) {
    if (selectedClass.classOptions) {
      const classOptions = Object.keys(selectedClass.classOptions).map((option, i) => {
        return (
          <span key={i}>
            <b>{option}</b>
            <br />
            <select>{this.getClassOptions(selectedClass, option)}</select>
            <br />
          </span>
        )
      })
      return classOptions;
    } else {
      return (
        <p>No class options</p>
      )
    }
  }

  findGimmickDescriptions(gimmick) {
    if (gimmick.descriptionPoints) {  
      const gimmickDescriptions = gimmick.descriptionPoints.map((description, i) => {
        return (
          <li key={i}>{description}</li>
        )
      });
      return gimmickDescriptions;
    }
  }

  getGimmicks(classGimmicks) {
    const gimmicks = Object.keys(classGimmicks).map((index, i) => {
      return (
        <section key={i}>
          <h3>{classGimmicks[index].name}:</h3>
          <p>{classGimmicks[index].description}</p>
          <ul className='list'>
            {this.findGimmickDescriptions(classGimmicks[index])}
          </ul>
        </section>
      )
    })
    return gimmicks;
  }

  findClassGimmicks(selectedClass) {
    const classGimmicks = selectedClass.levelAdditions[0];
    return (
      <section>
        <h3>At Level One:</h3>
        <p><b>Proficiency Bonus:</b> {classGimmicks.proficiencyBonus}</p>
        <p><b>Features: </b>{classGimmicks.features.join(', ')}</p>
        {this.getGimmicks(classGimmicks.classGimmick)}
      </section>
    )
  }

  getEquipmentChoices(selectedClass, equipment) {
    const equipmentChoices = selectedClass.equipment[equipment].options;
    const returnChoices = equipmentChoices.map((item, i) => {
      return (
        <option key={i} value={item}>{item}</option>
      )
    })
    return returnChoices;
  }

  getEquipment(selectedClass) {
    const equipment = selectedClass.equipment;
    const returnEquipChoices = Object.keys(equipment).map((equipment, i) => {
      if (equipment !== 'mandatory') {
        return (
          <div key={i}>
            <label><b>{equipment}:</b></label><br />
            <select>
              {this.getEquipmentChoices(selectedClass, equipment)}
            </select>
          </div>
        )
      }
    });
    return returnEquipChoices;
  }

  findEquipment(selectedClass) {
    const equipment = selectedClass.equipment;
    if (equipment.mandatory.items) {
      const mandatoryEquipment = equipment.mandatory.items.map((item, i) => {
        return (
          <p key={i}>{item.count}x {item.name}</p>
        )
      })

      return mandatoryEquipment;
    }
  }

  getSkills(skills) {
    const skillChoices = skills.options;
    const returnChoices = skillChoices.map((skill, i) => {
      return (
        <option key={i} value={skill}>{skill}</option>
      )
    });

    return returnChoices;
  }

  findSkills(selectedClass) {
    const skills = selectedClass.classFeatures.proficiencies.skills;
    const choiceCount = selectedClass.classFeatures.proficiencies.skills.choiceCount;
    let returnChoices = [];

    for (let i = 0; i < choiceCount; i++) {
      returnChoices.push(
        <div key={i}><select>${this.getSkills(skills)}</select></div>
      )
    }
    return returnChoices;
  }

  findProficiencies(selectedClass) {
    const proficiencies = selectedClass.classFeatures.proficiencies;
    const returnProfs = Object.keys(proficiencies).map((proficiency, i) => {
      if (proficiency !== 'skills') {
        if (proficiencies[proficiency].length > 0) {
          return (
            <p key={i}><b>{proficiency.toUpperCase()}</b>: {proficiencies[proficiency].join(', ')}</p>
          )
        }
      }
    });
    return returnProfs;
  }

  findFeatures(selectedClass) {
    const classFeatures = selectedClass.classFeatures;
    const featureDictionary = {
      hitDice: 'Hit Dice',
      hpAtLevelOne: 'HP At Level One',
      hpGainOnLevelUp: 'HP Gain After Level One'
    }
    const features = Object.keys(classFeatures).map((feature, i) => {
      if (feature !== 'proficiencies') {
        return (
          <p key={i}><b>{featureDictionary[feature]}</b>: {classFeatures[feature]}</p>
        )
      }
    })
    return features;
  }

  render() {
    const selectedClass = CLASSES[this.props.classSelected];
    return (
      <div className='snippet'>
        <section className='features-list'>
          <h3>Features:</h3>
          {this.findFeatures(selectedClass)}
        </section>

        <section className='proficiencies-list'>
          <h3>Proficiencies:</h3>
          {this.findProficiencies(selectedClass)}
          {this.findClassGimmicks(selectedClass)}
        </section>

        <section className='options-list'>
          <h3>Class Options:</h3>
          {this.findClassOptions(selectedClass)}
        </section>

        <section className='skills-list'>
          <h3>Skills (choose {selectedClass.classFeatures.proficiencies.skills.choiceCount}):</h3>
          {this.findSkills(selectedClass)}
        </section>

        <section className='equipments-list'>
          <h3>Starting Equipment:</h3>
          {this.findEquipment(selectedClass)}
          <h4>Equipment Choices:</h4>
          {this.getEquipment(selectedClass)}
        </section>
        <Link to='/character-creation/background'>
          <button className='commit-btn'>Commit</button>
        </Link>
      </div>
    );
  }
}

export default ClassSnippet;