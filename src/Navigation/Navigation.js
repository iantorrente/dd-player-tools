import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  getNavClassName(navBtn, state) {
    const source = state.componentData.activeTab;
    if (navBtn === source) {
      return 'nav-btn active-tab'
    } else {
      return 'nav-btn'
    }
  }

  handleIndicator(source, state) {
    const data = state.data;
    const dataConversion = { race: 'raceData', class: 'classData', background: 'backgroundData', alignment: 'alignmentData'};
    const dataKey = dataConversion[source];
    const dataToSearch = data[dataKey];
    const pcChoice = state.playerCharacter[source];

    if (dataToSearch[pcChoice] !== undefined) {
      return 'indicator-complete'
    } else {
      return 'indicator'
    }
  }

  render() {
    const state = this.props.state;
    return(
      <div>
        <div>
          <Link onClick={this.props.setActiveTab} to='/character-creation/character-preview'>
            <button source='character-preview'  className='character-preview-btn'>Preview Character</button>
          </Link>
        </div>
        <div className='nav-bar'>
          <Link onClick={this.props.setActiveTab} className='nav-link' to='/character-creation/race'>
            <button source='race' className={this.getNavClassName('race', state)}>
              Race
              <span className={this.handleIndicator('race', state)}></span>
            </button>
          </Link>
          <Link onClick={this.props.setActiveTab} className='nav-link' to='/character-creation/class'>
            <button source='class' className={this.getNavClassName('class', state)}>
              Class
              <span className={this.handleIndicator('class', state)}></span>
            </button>
          </Link>
          <Link onClick={this.props.setActiveTab} className='nav-link' to='/character-creation/background'>
            <button source='background' className={this.getNavClassName('background', state)}>
              Background
              <span className={this.handleIndicator('background', state)}></span>
            </button>
          </Link>
          <Link onClick={this.props.setActiveTab} className='nav-link' to='/character-creation/alignment'>
            <button source='alignment' className={this.getNavClassName('alignment', state)}>
              Alignment
              <span className={this.handleIndicator('alignment', state)}></span>
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Navigation;