import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Languages from '../../../../Data/Languages.js';

class ClassSnippet extends Component {
  getClassOptions(selectedClass, option) {
    const classOptions = selectedClass.classOptions;
    let returnOptions = [];

    if (option === 'extra language') {
      returnOptions = Object.keys(Languages).map((language, i) => {
        return (
          <option key={i}>{language}</option>
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
    let returnChoices = [];
    let choiceCount = 0;

    if (selectedClass.classOptions && selectedClass.classOptions['extra language'] !== undefined) {
      choiceCount = selectedClass.classOptions['extra language'].amount;

      for (let i = 0; i < choiceCount; i++) {
        returnChoices.push(
          <div key={i}>
            <h3>Class Option - Extra Language {i + 1}:</h3>
            <select 
              index={i} 
              source='class'
              value={this.props.pc.classExtraLanguages[i] ? this.props.pc.classExtraLanguages[i] : 'Languages:'}
              onChange={this.props.handleLanguageSelection}
            >
              <option>Languages:</option>
              {this.getClassOptions(selectedClass, 'extra language')}
            </select>
          </div>
        )
      }
    } else if (selectedClass.classOptions && !selectedClass.classOptions['extra language']) {
      returnChoices = Object.keys(selectedClass.classOptions).map((option, i) => {
        return (
          <div key={i}>
            <h3>Class Option - {option}:</h3>
            <select>
              <option value={option}>{option}:</option>
              {this.getClassOptions(selectedClass, option)}
            </select>
          </div>
        )
      })
    } 
    
    return returnChoices;
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
            <select
              type={equipment} 
              onChange={this.props.handleEquipmentSelection}
            >
              {this.getEquipmentChoices(selectedClass, equipment)}
            </select>
          </div>
        )
      }
    });
    return returnEquipChoices;
  }

  findMandatoryEquipment(selectedClass) {
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
        <div key={i}>
          <select 
            index={i} 
            value={this.props.pc.skills[i] ? this.props.pc.skills[i] : 'Skills:'} 
            onChange={this.props.handleSkillSelection}>
              <option>Skills:</option>
              {this.getSkills(skills)}
          </select>
        </div>
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
      if (feature === 'hpAtLevelOne' || feature === 'hpGainOnLevelUp') {
        return (
          <p key={i}><b>{featureDictionary[feature]}</b>: {classFeatures[feature]} + Constitution</p>
        )
      }

      if (feature !== 'proficiencies') {
        return (
          <p key={i}><b>{featureDictionary[feature]}</b>: {classFeatures[feature]}</p>
        )
      }
    })
    return features;
  }

  render() {
    const selectedClass = this.props.data.classData[this.props.pc.class];
    return (
      <div className='snippet'>
        <section className='features-list'>
          <h3>Hit Point Values:</h3>
          {this.findFeatures(selectedClass)}
        </section>

        <section className='proficiencies-list'>
          <h3>Proficiencies:</h3>
          {this.findProficiencies(selectedClass)}
          {this.findClassGimmicks(selectedClass)}
        </section>

        <section className='options-list'>
          {this.findClassOptions(selectedClass)}
        </section>

        <section className='skills-list'>
          <h3>Skills (choose {selectedClass.classFeatures.proficiencies.skills.choiceCount}):</h3>
          {this.findSkills(selectedClass)}
        </section>

        <section className='equipments-list'>
          <h3>Starting Equipment:</h3>
          {this.findMandatoryEquipment(selectedClass)}
          <h4>Equipment Choices:</h4>
          {this.getEquipment(selectedClass)}
        </section>
      </div>
    );
  }
}

export default ClassSnippet;