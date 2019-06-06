import React, { Component } from 'react';
import StatRow from './StatRow.js';

class StatBlock extends Component {
  render() {
    return (
      <div className='stat-block'>
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
        <button className='randomize-stats-btn' onClick={this.props.getRandomNumbers}>Randomize</button>
      </div>
    )
  }
}

export default StatBlock;