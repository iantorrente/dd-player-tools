import React, { Component } from 'react';
import Classes from '../../Data/Classes.js';

class ACItem extends Component {
  findAC() {
    const pc = this.props.pc;
    let ac = 0;

    if(Classes[pc.class] !== undefined) {
      
    }
    return ac;
  }

  render() {
    return (
      <div>
        {this.findAC()}
      </div>
    )
  }
}

export default ACItem;