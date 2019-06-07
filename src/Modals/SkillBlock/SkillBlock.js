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
          <SkillItem key={i} skill={skill} modifier={modifier} tiedStat={Skills[skill].tiedStat} proficient='proficient' />
        )
      } else {
        return (
          <SkillItem key={i} skill={skill} modifier={modifier} tiedStat={Skills[skill].tiedStat} proficient='not-proficient' />
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