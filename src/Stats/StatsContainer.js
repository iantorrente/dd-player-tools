import React, { Component } from 'react';
import StatContainer from './StatContainer.js'

class StatsContainer extends Component {
  render() {
    return (
      <div className='stats-container'>
        <StatContainer statName="strength" character={this.props.character} STATS={this.props.STATS} />
        <StatContainer statName="dexterity" STATS={this.props.STATS} character={this.props.character} />
        <StatContainer statName="constitution" character={this.props.character} STATS={this.props.STATS} />
        <StatContainer statName="intelligence" character={this.props.character} STATS={this.props.STATS} />
        <StatContainer statName="wisdom" character={this.props.character} STATS={this.props.STATS} />
        <StatContainer statName="charisma" character={this.props.character} STATS={this.props.STATS} />
      </div>
    );
  }
}

export default StatsContainer;