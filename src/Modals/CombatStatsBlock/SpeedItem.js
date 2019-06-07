import React, { Component } from 'react';
import Races from '../../Data/Races.js';

class SpeedItem extends Component {
  findSpeed() {
    const pc = this.props.pc;
    let speed = 0;

    if (Races[pc.race] !== undefined) {
      speed = Races[pc.race].moveSpeed;
    }

    return speed;
  }

  render() {
    return (
      <div className='speed-item'>
        <h4 className='speed-value'>{this.findSpeed()} ft.</h4>
        <h3 className='speed-title'>Speed</h3>
      </div>
    )
  }
}

export default SpeedItem;