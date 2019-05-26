import React, { Component } from 'react';

class LevelSection extends Component {
  render() {
    return(
      <div className='step-section'>
        <h2 className='cc-step'>Step {this.props.step}: Choose a Starting Level</h2>
      </div>
    )
  }
}

export default LevelSection;