import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return(
      <div className='nav-bar'>
        <Link className='nav-link' to='/character-creation/race'>
          <button className="nav-btn">Race</button>
        </Link>
        <Link className='nav-link' to='/character-creation/class'>
          <button className="nav-btn">Class</button>
        </Link>
        <Link className='nav-link' to='/character-creation/background'>
          <button className="nav-btn">Background</button>
        </Link>
        <Link className='nav-link' to='/character-creation/alignment'>
          <button className="nav-btn" >Alignment</button>
        </Link>
      </div>
    )
  }
}

export default Navigation;