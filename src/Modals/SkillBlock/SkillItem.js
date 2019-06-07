import React, { Component } from 'react';

class SkillItem extends Component {
  render() {
    return (
      <span className='skill-item long-item'>
        <span className={this.props.proficient}></span>
        <h5 className='skill-name'>{this.props.skill} ({this.props.tiedStat.substring(0, 3)})</h5>
        <h5 className='skill-modifier'><b>{this.props.modifier}</b></h5>
      </span>
    )
  }
}

export default SkillItem;