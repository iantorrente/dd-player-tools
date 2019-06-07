import React, { Component } from 'react';
import Classes from '../../Data/Classes.js';
import StatModifiers from '../../Data/StatModifiers.js';

class HPItem extends Component {
  findHP() {
    const pc = this.props.pc;
    let hp = 0;

    if (Classes[pc.class] !== undefined) {
      hp = Classes[pc.class].classFeatures.hpAtLevelOne + StatModifiers[pc.stats['constitution']].value;
    }

    return hp;
  }

  render() {
    return (
      <div className='hp-item'>
        <h4 className='hp-value'>{this.findHP()}</h4>
        <h3 className='hp-title'>Hit Points</h3>
      </div>
    )
  }
}

export default HPItem;