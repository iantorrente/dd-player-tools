import React, { Component } from 'react';
import BACKGROUNDS from '../../../../Data/Backgrounds.js';

class BackgroundSnippet extends Component {
  render() {
    const background = BACKGROUNDS[this.props.backgroundSelected];
    return (
      <div className='snippet'>
        <p>{background.description}</p>
      </div>
    )
  }
}

export default BackgroundSnippet;