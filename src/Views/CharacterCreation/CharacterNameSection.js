import React, { Component } from 'react';

class CharacterNameSection extends Component {
  render() {
    return(
      <div className='step-section'>
        <h2 className='cc-step'>Step {this.props.step}: Name Your Character</h2>
      </div>
    )
  }
}

export default CharacterNameSection;