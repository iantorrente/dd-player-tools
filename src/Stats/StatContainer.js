import React, { Component } from 'react';
import StatName from './StatName.js';
import StatAbilities from './StatAbilities.js'

class StatContainer extends Component {
  render() {
    return (
      <div className='stat-container'>
        <h3>{this.props.name} container</h3>
        <StatName name={this.props.name} />
        <StatAbilities STORE={this.props.STORE} name={this.props.name} />
      </div>
    );
  }
}

export default StatContainer;