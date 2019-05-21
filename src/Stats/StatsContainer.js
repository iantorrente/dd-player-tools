import React, { Component } from 'react';
import StatContainer from './StatContainer.js'

class StatsContainer extends Component {
  render() {
    return (
      <div className='stats-container'>
        <h2>Stats Container</h2>
        <StatContainer name="strength" STORE={this.props.STORE} />
        <StatContainer name="dexterity" STORE={this.props.STORE} />
        <StatContainer name="constitution" STORE={this.props.STORE} />
        <StatContainer name="intelligence" STORE={this.props.STORE} />
        <StatContainer name="wisdom" STORE={this.props.STORE} />
        <StatContainer name="charisma" STORE={this.props.STORE} />
      </div>
    );
  }
}

export default StatsContainer;