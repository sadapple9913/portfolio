import React from 'react'
import "../styles/Main.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cube from '../components/Cube';
import Nav from '../components/Nav';

function Main() {

  return (
    <>
    <Nav />
    <div className='cube'>
      <Cube />
    </div>
    <div className='main__info'>
      <h1><span>HI , I'M </span> SAGNCHEAL JUNG</h1>
      <p>I'm front-end developer</p>
      <div className='more__box'>
      <span> <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> see my projects</span>
      <span> <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> more about me</span>
      </div>
    </div>

    </>
  )
}

export default Main