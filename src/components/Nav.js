import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/Nav.scss"
import HamMenu from './HamMenu';


function Nav() {



  return (
    <div className='nav__wrap'>
      <div className='left_side'>
        <span>
          <FontAwesomeIcon icon="fa-solid fa-cube" />
          </span>
      </div>
      <div className='right_side'>
        <span className='moon'><FontAwesomeIcon icon="fa-regular fa-moon" /></span>
        <span><HamMenu /></span>
      </div>  
    </div>
  )
}

export default Nav