import React, { Component } from 'react';

class LanguageItem extends Component {
  render() {
    return (
      <div className='language-item long-item'>
        <h4>{this.props.language}</h4>
      </div>
    )
  }
}

export default LanguageItem;