import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return(
      <div className="navigation-bar">
        <button className="nav-btn" onClick={() => this.props.handleViewChange('stats')}>Stats</button>
        <button className="nav-btn" onClick={() => this.props.handleViewChange('equipment')}>Equipment</button>
        <button className="nav-btn" onClick={() => this.props.handleViewChange('spells')}>Spells</button>
        <button className="nav-btn" onClick={() => this.props.handleViewChange('journal')}>Journal</button>
      </div>
    )
  }
}

export default Navigation;