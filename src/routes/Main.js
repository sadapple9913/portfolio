import React, { useState, useEffect } from 'react';
import "../styles/Main.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cube from '../components/Cube';
import Nav from '../components/Nav';

function Main() {
  const [opacity, setOpacity] = useState(0);
  const [pageTransition, setPageTransition] = useState(false);
  
  useEffect(() => {
    setOpacity(1);
  }, []);

  function handleOnClick() {
    setOpacity(0);
    setTimeout(() => {
      // window.open("https://github.com/sadapple9913/", "_blank");
      setOpacity(1);
    },1000);
  }

  return (
    <div className='main_wrap'>
      <div className='bg'></div>
       <Nav handleOnClick={handleOnClick}/>
      <div className='cube'>
        <Cube />
      </div>
      <div className='main__info'>
        <h1><span className={`span ${opacity === 1 ? "visible" : "hidden"}`}>HI , I'M </span> <span className={`wave ${opacity === 1 ? "visible" : "hidden"}`}>SAGNCHEAL JUNG</span></h1>
        <p className={`moveMent ${opacity === 1 ? "visible" : "hidden"}`}><span>I'm front-end developer</span></p>
        <div className='more__box'>
          <span onClick={handleOnClick} className={`moveMent ${opacity === 1 ? "visible" : "hidden"}`}> <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> see my projects</span>
          <span className={`moveMent ${opacity === 1 ? "visible" : "hidden"}`}> <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> more about me</span>
        </div>
      </div>
    </div>
  );
}

export default Main;