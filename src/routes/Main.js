import React, { useState, useEffect } from 'react';
import "../styles/Main.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cube from '../components/Cube';
import Nav from '../components/Nav';
import { useNavigate } from 'react-router-dom';


function Main() {
  const [opacity, setOpacity] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    setOpacity(0);
  
    const timeoutId = setTimeout(() => {
      setOpacity(1);
    }, 100);
  
    return () => {
      clearTimeout(timeoutId);
      setOpacity(0);
    };
  }, []);

  function handleOnClick() {
    setOpacity(0);
    setTimeout(() => {
      setOpacity(1);
    },800);
  }

  function projectOnClick() {
    setOpacity(0);
    setTimeout(() => {
      window.open("https://github.com/sadapple9913/", "_blank");
      setOpacity(1);
    },800);
  }

  function aboutLinkOnClick(){
    setOpacity(0);
    setTimeout(() => {
      navigate("/About")
      setOpacity(1);
    },800);
    };
  

  return (
    <div className='main_wrap'>
      <div className='bg'></div>
       <Nav handleOnClick={handleOnClick}/>
      <div className={`cube ${opacity === 1 ? "visible" : "hidden"}`}>
        <Cube />
      </div>
      <div className='main__info'>
        <h1><span className={`span ${opacity === 1 ? "visible" : "hidden"}`}>HI , I'M </span> <span className={`wave ${opacity === 1 ? "visible" : "hidden"}`}>SAGNCHEAL JUNG</span></h1>
        <p className={`moveMent ${opacity === 1 ? "visible" : "hidden"}`}><span>I'm front-end developer</span></p>
        <div className='more__box'>
          <span onClick={projectOnClick} className={`moveMent ${opacity === 1 ? "visible" : "hidden"}`}> <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> see my projects</span>
          <span className={`moveMent ${opacity === 1 ? "visible" : "hidden"}`} onClick={aboutLinkOnClick}> <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> more about me</span>
        </div>
      </div>
    </div>
  );
}

export default Main;