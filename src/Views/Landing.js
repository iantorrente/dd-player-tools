import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className='landing'>
        <h1>Landing</h1>
        <button onClick={this.props.handleViewChange}>Create A Character</button>
      </div>
    )
  }
}

export default Landing;