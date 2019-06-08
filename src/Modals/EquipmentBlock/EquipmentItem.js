import React, { Component } from 'react';

class EquipmentItem extends Component {
  render() {
    return (
      <div className='long-item'>
        <h4>{this.props.itemName}</h4>
      </div>
    )
  }
}

export default EquipmentItem;