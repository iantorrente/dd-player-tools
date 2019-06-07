import React, { Component } from 'react';
import StatRow from './StatRow.js';

class StatBlock extends Component {
  render() {
    return (
      <div className='stat-block block'>
        <h3>Stats:</h3>
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