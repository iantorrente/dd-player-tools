import React, { Component } from 'react';
import Races from '../../Data/Races.js';
import StatModifiers from '../../Data/StatModifiers.js';

class StatItem extends Component {
  findStatModifier() {
    const statValue = this.findStatValue();
    const statModifier = StatModifiers[statValue].value;
    return statModifier;
  }

  findStatValue() {
    const stat = this.props.stat;
    let statValue = this.props.pc.stats[stat];

    if (Races[this.props.pc.race] && Races[this.props.pc.race].statModifiers[stat] !== undefined) {
      statValue += Races[this.props.pc.race].statModifiers[stat]
    }
    return statValue;
  }

  render() {
    return (
      <span className='stat-item'>
        <h5 className='stat-name'>{this.props.stat}</h5>
        <div className='stat-item-details'>
          <p className='stat-value'><b>{this.findStatValue()}</b></p>
          <p className='stat-modifier'>{this.findStatModifier()}</p>
        </div>
      </span>
    )
  }
}

export default StatItem;