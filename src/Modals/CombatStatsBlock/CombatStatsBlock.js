import React, { Component } from 'react';
import ACItem from './ACItem.js';
import InitiativeItem from './InitiativeItem.js';
import SpeedItem from './SpeedItem.js';
import HPItem from './HPItem.js';

class CombatStatsBlock extends Component {
  render() {
    console.log(this.props.pc);
    return (
      <div className='combat-stats-block'>
        <section className='row'>
          {/* Gonna have to come back to AC as I'll need to 
            refactor the item data for this to work smoothly 
            <ACItem pc={this.props.pc} /> 
          */}
          <InitiativeItem pc={this.props.pc} />
          <HPItem pc={this.props.pc} />
          <SpeedItem pc={this.props.pc} />
        </section>
      </div>
    )
  }
}

export default CombatStatsBlock;