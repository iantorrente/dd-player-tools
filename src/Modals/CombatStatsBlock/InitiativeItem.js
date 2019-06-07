import React, { Component } from 'react';
import StatModifiers from '../../Data/StatModifiers.js';

class InitiativeItem extends Component {
  findInitiative() {
    const pc = this.props.pc;
    let initiaitive = 0;

    initiaitive = StatModifiers[pc.stats['dexterity']].value;
    return initiaitive;
  }

  render() {
    return (
      <div className='initiative-item'>
        <h4 className='initiative-value'>{this.findInitiative()}</h4>
        <h3 className='initiative-title'>Initiative</h3>
      </div>
    )
  }
}

export default InitiativeItem;