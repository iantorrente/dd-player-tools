import React, { Component } from 'react';
import StatRow from './StatRow.js';

class StatBlock extends Component {
  render() {
    return (
      <div className='stat-block'>
        <h3>Points available: {this.props.pc.statPoints}/27</h3>
        <StatRow 
          handleStatIncrease={this.props.handleStatIncrease}
          handleStatDecrease={this.props.handleStatDecrease}
          stats={['strength', 'constitution', 'dexterity']} 
          pc={this.props.pc} 
        />
        <StatRow 
          handleStatIncrease={this.props.handleStatIncrease}
          handleStatDecrease={this.props.handleStatDecrease}
          stats={['intelligence', 'wisdom', 'charisma']} 
          pc={this.props.pc} />
      </div>
    )
  }
}

export default StatBlock;