import React from 'react'
import Nav from '../components/Nav'
import "../styles/Menu.scss"
import "../styles/Nav.scss"
import Cube from '../components/Cube'
import { useNavigate } from 'react-router-dom'

function Menu() {
  const navigate = useNavigate();

  function HomeLink() {
      navigate("/");
    }
  function WorkLink() {
    navigate("/Work");
  }
  function AboutLink() {
    navigate("/About");
  }
  function ContactLink() {
    navigate("/Contact");
  }
    

  return (
    <div className='Menu__wrap'>
    <Nav />
      <div className='profile__name'>
        <p>SangCheal Jung</p>
      </div>
      <div className='Menu__list'>
        <ul>
          <li onClick={HomeLink}><span>01</span> HOME</li>
          <li onClick={WorkLink}><span>02</span> WORK</li>
          <li><span>03</span> ABOUT</li>
          <li><span>04</span> CONTACT</li>
        </ul>
      </div>
      <div className='cube menu'>
      <Cube />
      </div>
    </div>
  )
}

export default Menu;