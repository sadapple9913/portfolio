import React, { useCallback, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/Nav.scss"
import HamMenu from './HamMenu';
import { useNavigate } from 'react-router-dom';


function Nav({ handleOnClick }) {
const navigate = useNavigate();

  const handleMouseEnter = useCallback(() => {
    document.querySelector('.cursor').classList.add('cursor-effect');
    document.querySelector('.cursor_dot').classList.add('cursor-effect');
  }, []);

  const handleMouseLeave = useCallback(() => {
    document.querySelector('.cursor').classList.remove('cursor-effect');
    document.querySelector('.cursor_dot').classList.remove('cursor-effect');
  }, []);

  
  return (
    <div className='nav__wrap '>
      <div className='left_side'>
        <span onClick={()=> navigate("/")}>
          <FontAwesomeIcon icon="fa-solid fa-cube" />
          </span>
      </div>
      <div className='right_side'>
        <span className='moon'><FontAwesomeIcon icon="fa-regular fa-moon" /></span>
        <span
          onClick={handleOnClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className='cursor-effect'
        ><HamMenu /></span>
      </div>  
    </div>
  )
}

export default Nav