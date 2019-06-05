import React, { Component } from 'react';
import StatItem from './StatItem.js';

class StatBlock extends Component {
  displayStatItems() {
    const stats = this.props.stats.map((stat, i) => {
      return (
        <StatItem 
          handleStatIncrease={this.props.handleStatIncrease}
          handleStatDecrease={this.props.handleStatDecrease}
          key={i} 
          stat={stat} 
          pc={this.props.pc} 
        />
      )
    });
    return stats;
  }

  render() {
    return (
      <div className='stat-row'>
        {this.displayStatItems()}
      </div>
    )
  }
}

export default StatBlock;