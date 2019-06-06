import React, { Component } from 'react';
import SkillItem from './SkillItem.js';
import Races from '../../Data/Races.js';
import Classes from '../../Data/Classes.js';

class SkillBlock extends Component {
  getSkillModifier() {
    
  }

  getSkills() {
    let skills = [];
    if (this.props.pc.race) {
      console.log(Races[this.props.pc.race]);
    }

    if (this.props.pc.class) {
      console.log(Classes[this.props.pc.class]);
    }
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