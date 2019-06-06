import React, { Component } from 'react';
import SkillItem from './SkillItem.js';
import Races from '../../Data/Races.js';
import Classes from '../../Data/Classes.js';
import Backgrounds from '../../Data/Backgrounds.js';
import Skills from '../../Data/Skills.js';
import StatModifiers from '../../Data/StatModifiers.js';

class SkillBlock extends Component {
  getSkillModifier(skill) {
    let tiedStat = Skills[skill].tiedStat;
    let actualStat = this.props.pc.stats[tiedStat];
    let statModifier = StatModifiers[actualStat].value;
    return statModifier;
  }

  getSkills() {
    const classSelected = Classes[this.props.pc.class];
    let proficientSkills = [];

    if (this.props.pc.skills.length > 0) {
      proficientSkills.push(...this.props.pc.skills);
    }

    if (Backgrounds[this.props.pc.background] !== undefined) {
      proficientSkills.push(...Backgrounds[this.props.pc.background].proficiencies.skill.items);
    }

    const skills = Object.keys(Skills).map((skill, i) => {
      let modifier = this.getSkillModifier(skill);

      if (proficientSkills.includes(skill) && Classes[this.props.pc.class] !== undefined) {
        modifier += classSelected.levelAdditions[0].proficiencyBonus;
        return (
          <span key={i} className='skill-item'>
            <span className='proficient'></span>
            <h5 className='skill-name'>{skill}</h5>
            <h5 className='skill-modifier'><b>{modifier}</b></h5>
          </span>
        )
      } else {
        return (
          <span key={i} className='skill-item'>
            <span className='not-proficient'></span>
            <h5 className='skill-name'>{skill}</h5>
            <h5 className='skill-modifier'><b>{modifier}</b></h5>
          </span>
        )
      }
    })
    return skills;
  }

  render() {
    return (
      <div className='skill-block'>
        <h3>Skills:</h3>
        {this.getSkills()}
      </div>
    )
  }
}

export default SkillBlock;