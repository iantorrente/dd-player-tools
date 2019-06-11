import React, { Component } from 'react';
import Alignments from '../Data/Alignments.js';
import StatBlock from './StatBlock/StatBlock.js';
import SkillBlock from './SkillBlock/SkillBlock.js';
import CombatStatsBlock from './CombatStatsBlock/CombatStatsBlock.js';
import FeaturesBlock from './FeaturesBlock/FeaturesBlock.js';
import LanguagesBlock from './LanguagesBlock/LanguagesBlock.js';
import EquipmentBlock from './EquipmentBlock/EquipmentBlock.js';

class CharacterPreview extends Component {
  getRace(data) {
    let race = 'Raceless';
    if (this.props.pc.race) {
      race = data.raceData[this.props.pc.race].name;
    }
    return race;
  }

  getClass(data) {
    let charClass = 'Classless';
    if (this.props.pc.class) {
      charClass = data.classData[this.props.pc.class].name;
    }
    return charClass;
  }

  getBackground(data) {
    let background = 'Unknown';
    if (this.props.pc.background) {
      background = data.backgroundData[this.props.pc.background].name;
    }
    return background;
  }

  getAlignment(data) {
    let alignment = 'Unaligned';
    if (this.props.pc.alignment) {
      alignment = data.alignmentData[this.props.pc.alignment].name;
    }
    return alignment;
  }

  render() {
    const data = this.props.data;
    return (
      <div className='character-preview'>
        <h2 className='character-preview-title'>Dave the {this.getAlignment(data)} {this.getBackground(data)}, 1st Level {this.getRace(data)} {this.getClass(data)}</h2>
        <CombatStatsBlock 
          pc={this.props.pc}
        />
        <StatBlock 
          getRandomNumbers={this.props.getRandomNumbers}
          handleStatIncrease={this.props.handleStatIncrease}
          handleStatDecrease={this.props.handleStatDecrease}
          pc={this.props.pc} 
        />
        <SkillBlock pc={this.props.pc} />
        <FeaturesBlock pc={this.props.pc} />
        <LanguagesBlock pc={this.props.pc} />
        {/* Will have to come back to this when the item data refactor is done
          WeaponsBlock 
        */}
        <EquipmentBlock pc={this.props.pc} />
        {/* <button onClick={this.props.handleCharacterSave}>Save Character</button> */}
      </div>
    )
  }
}

export default CharacterPreview;