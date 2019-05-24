import React, { Component } from 'react';
import StatName from './StatName.js';
import StatSkills from './StatSkills.js'

class StatContainer extends Component {
  render() {
    return (
      <div className='stat-container'>
        <StatName character={this.props.character} statName={this.props.statName} />
        <StatSkills character={this.props.character} STATS={this.props.STATS} statName={this.props.statName} />
      </div>
    );
  }
}

export default StatContainer;