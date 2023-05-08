import React from 'react'
import Nav from '../components/Nav'
import "../styles/Contact.scss"

function Contact() {

  function OnClickGitHub() {
    window.open("https://github.com/sadapple9913/", "_blank");
  }

  return (
    <div className='contact_wrap'>
      <Nav />
      <div className='contact_info'>
        <h2>CONTACT</h2>
        <p><span>MAIL</span> jsc3441 @ gamil.com</p>
        <p><span>Phone</span> 010-5746-9913</p>
        <p onClick={OnClickGitHub}><span>GitHub</span> <img className="github" alt="github-icon" src={process.env.PUBLIC_URL + '/images/github-icon.png'} /></p>
      </div>
    </div>
  )
}

export default Contact