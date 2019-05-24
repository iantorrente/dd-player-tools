import React, { Component } from 'react';

class StatName extends Component {
  firstLetterUC(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    return(
      <span className="stat-name">
        <h4>{this.firstLetterUC(this.props.statName)}</h4>
        <h3>{this.props.character[this.props.statName]}</h3>
      </span>
    )
  }
}

export default StatName;