import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className='landing'>
        <header className='landing-header'>
          <h1>D&D New Character Creator</h1>
          <button className='character-creation-btn' onClick={this.props.handleViewChange}>Create A Character</button>
        </header>

        <section className='landing-section'>
          <h2>What Is This?</h2>
          <p>The D&D New Character Creator is a simple tool to help new and veteran players with possibly the most time consuming pre-campaign ritual: creating a character. This tool takes all of the necesarry information from the 5th Edition Player Handbook and condenses it into what's relevant to character creation. <br /><br /> 
          
          The whole tool is guided with steps indicating what comes next.</p>
        </section>
        <section className='landing-section'>
          <h2>Why Make This?</h2>
          <p></p>
        </section>
        <section className='landing-section'>
          <h2>How Do I Use It?</h2>
          <p></p>
        </section>

      </div>
    )
  }
}

export default Landing;