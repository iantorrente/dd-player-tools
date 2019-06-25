import React, { Component } from 'react';
import EquipmentItem from './EquipmentItem.js';
import Backgrounds from '../../Data/Backgrounds.js';
import Classes from '../../Data/Classes.js';

class EquipmentBlock extends Component {
  findEquipment() {
    const pc = this.props.pc;
    const equipmentChoices = pc.equipmentChoices;
    let equipment = [];
    let returnEquipment = [];

    if (Backgrounds[this.props.pc.background] !== undefined) {
      const backgroundItems = Backgrounds[this.props.pc.background].equipment.items;
        equipment = [...equipment, ...backgroundItems];
    }

    if (Classes[this.props.pc.class] !== undefined && Object.keys(Classes[this.props.pc.class].equipment.mandatory).length > 0) {
      const classMandatoryItems = Classes[this.props.pc.class].equipment.mandatory.items;
      classMandatoryItems.forEach((item, i) =>{
        equipment = [...equipment, `${classMandatoryItems[i].count}x ${classMandatoryItems[i].name}`]
      })
    }

    Object.keys(equipmentChoices).forEach((item) => {
      if (equipmentChoices[item] !== '') {
        equipment = [...equipment, equipmentChoices[item]];
      }
    })

    equipment.map((item, i) => {
        returnEquipment.push(
          <EquipmentItem key={i} itemName={item} />
          );
    });

    return returnEquipment;
  }

  render() {
    return (
      <div className='equipment-block block'>
        <h3>Equipment:</h3>
        {this.findEquipment()}
      </div>
    )
  }
}

export default EquipmentBlock;