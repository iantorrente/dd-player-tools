import React, { Component } from 'react';
import Races from '../../Data/Races.js';

class StatItem extends Component {
  findStatValue() {
    const stat = this.props.stat;
    const startingStatValue = this.props.pc.startingData[stat].initialValue;
    const incrementedStat = this.props.pc.stats[stat];
    let statValue = startingStatValue + incrementedStat;

    if (Races[this.props.pc.race] && Races[this.props.pc.race].statModifiers[stat] !== undefined) {
      statValue += Races[this.props.pc.race].statModifiers[stat]
    }
    return statValue;
  }
  render() {
    return (
      <span className='stat-item'>
        <h5>{this.props.stat}</h5>
        <div className='stat-item-details'>
          <button 
            className='stat-increment-btn'
            onClick={() => this.props.handleStatDecrease(this.props.stat)}>-</button>
          <p>{this.findStatValue()}</p>
          <button 
            className='stat-increment-btn'
            onClick={() => this.props.handleStatIncrease(this.props.stat)}>+</button>
        </div>
      </span>
    )
  }
}

export default StatItem;