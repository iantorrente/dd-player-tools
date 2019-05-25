import React, { Component } from 'react';
import Classes from '../Data/Classes.js';

class ClassSection extends Component {
  getClassOptions() {
    const classOptions = Object.keys(Classes).map(function(key, i) {
      return (
        <option key={i} value={key}>{key}</option>
      )
    });
    return classOptions;
  }

  render() {
    console.log(Classes);
    const classOptions = this.getClassOptions();
    return(
      <div className='step-section'>
        <h2 className='cc-step'>Step 2: Choose a Class</h2>
        <select className='class-selection' onChange={this.props.handleClassSelection}>
        <option>Classes:</option>
          {classOptions}
        </select>
        
      </div>
    )
  }
}

export default ClassSection;