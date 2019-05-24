import React, { Component } from 'react';
import StatsContainer from '../Stats/StatsContainer.js';

class StatsView extends Component {
  render() {
    const character = this.props.character;

    return(
      <div className='stats-view'>
        <StatsContainer character={character} STATS={this.props.STATS} />
      </div>
    );
  }
}

export default StatsView;