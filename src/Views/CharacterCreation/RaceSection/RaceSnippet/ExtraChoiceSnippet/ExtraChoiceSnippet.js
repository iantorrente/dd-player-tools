import React, { Component } from 'react';

class ExtraChoiceSnippet extends Component {
  render() {
    console.log(this.props.choice);
    return (
      <div className='extra-choice-snippet'>
        <h3>Extra Choice Snippet</h3>
      </div>
    );
  }
}

export default ExtraChoiceSnippet;