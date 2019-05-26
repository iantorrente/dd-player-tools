import React, { Component } from 'react';

class BackgroundSection extends Component {
  render() {
    return(
      <div className='step-section'>
        <h2 className='cc-step'>Step {this.props.step}: Choose a Background</h2>
      </div>
    )
  }
}

export default BackgroundSection;