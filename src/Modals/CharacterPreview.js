import React, { Component } from 'react';
import Races from '../Data/Races.js';
import Classes from '../Data/Classes.js';
import Alignments from '../Data/Alignments.js';
import StatBlock from './StatBlock/StatBlock.js';
import SkillBlock from './SkillBlock/SkillBlock.js';

class CharacterPreview extends Component {
  getRace() {
    let race = 'Raceless';
    if (this.props.pc.race) {
      race = Races[this.props.pc.race].name;
    }
    return race;
  }

  getClass() {
    let charClass = 'Classless';
    if (this.props.pc.class) {
      charClass = Classes[this.props.pc.class].name;
    }
    return charClass;
  }

  getAlignment() {
    let alignment = 'Unaligned';
    if (this.props.pc.alignment) {
      alignment = Alignments[this.props.pc.alignment].name;
    }
    return alignment;
  }

  render() {
    return (
      <div className='character-preview'>
        <h2 className='character-preview-title'>Dave the {this.getAlignment()} {this.getRace()}, 1st Level {this.getClass()}</h2>
        <StatBlock 
          getRandomNumbers={this.props.getRandomNumbers}
          handleStatIncrease={this.props.handleStatIncrease}
          handleStatDecrease={this.props.handleStatDecrease}
          pc={this.props.pc} 
        />
        <SkillBlock pc={this.props.pc}/>
      </div>
    )
  }
}

export default CharacterPreview;