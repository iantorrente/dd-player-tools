import React, { Component } from 'react';
import Classes from '../../../Data/Classes.js'
import ClassSnippet from './ClassSnippet/ClassSnippet.js';
import Explanation from '../Explanation.js';

class ClassSection extends Component {
  getClassOptions() {
    const classOptions = Object.keys(Classes).map(function(key, i) {
      return (
        <option key={i} value={key}>{Classes[key].name}</option>
      )
    });
    return classOptions;
  }

  render() {
    const classOptions = this.getClassOptions();
    
    return(
      <div className='step-section'>
        <h2 className='cc-step'>Step {this.props.step}: Choose a Class</h2>
        <select className='class-selection' onChange={this.props.handleClassSelection} value={this.props.classSelected}>
        <option>Classes:</option>
          {classOptions}
        </select>
        {
          (Classes[this.props.classSelected] !== undefined) ?
            <ClassSnippet 
              pc={this.props.pc} 
              classSelected={this.props.classSelected} 
              handleSkillSelection={this.props.handleSkillSelection}
            />
          :
            <Explanation toExplain='class' />
        }
      </div>
    )
  }
}

export default ClassSection;