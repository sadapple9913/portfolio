import React, { useCallback, useState } from 'react';
import Nav from '../components/Nav';
import '../styles/Work.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useOpacity } from '../Hooks/UseOpacity';
import { useCursorEffect } from '../Hooks/UseCursorEffect';


function Work() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const navigate = useNavigate();
  const { opacity, handleOpacityChange } = useOpacity();
  const { handleMouseEnter, handleMouseLeave } = useCursorEffect();

  const handleMouseOver = useCallback((index) => {
    handleMouseEnter();
    setHoverIndex(index);
  }, [handleMouseEnter]);

  const handleMouseOut = useCallback(() => {
    handleMouseLeave();
    setHoverIndex(null);
  }, [handleMouseLeave]);

  const handleOnClick = useCallback(() => handleOpacityChange(() => {}), [handleOpacityChange]);

  const handleLinkClick = useCallback((route) => {
    handleOpacityChange(() => {
      navigate(route);
    }, 550);
  }, [navigate, handleOpacityChange]);

  return (
    <div>
        <div className='bg'></div>
      <Nav handleOnClick={handleOnClick}/>
      <div className="list__content__wraper">
      {Array(6).fill().map((_, i) => (
          <div
            key={i}
            className={`list__content__img ${hoverIndex === i ? 'on' : ''}`}
          ></div>
        ))}
      </div>
      <div className="Work__list">
        <ul>
          <li 
          className={`list__content title ${opacity === 1 ? "visible" : "hidden"}`}>
            <h1>WORK</h1>
            <span>6</span>
          </li>
          <li
            className={`list__content cursor-effect ${opacity === 1 ? "visible" : "hidden"}`}
            onMouseOver={() => handleMouseOver(0)}
            onMouseOut={handleMouseOut}
            onClick={() => handleLinkClick("/SamsungEm")}
          >
            <p><span><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span> Samsung-Em clone</p>
            <span>Web Development</span>
          </li>
          <li
            className={`list__content cursor-effect ${opacity === 1 ? "visible" : "hidden"}`}
            onMouseOver={() => handleMouseOver(1)}
            onMouseOut={handleMouseOut}
            onClick={() => handleLinkClick("/Cjone")}
          >
            <p><span><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span> Cj one clone</p>
            <span>Web Development</span>
          </li>
          <li
            className={`list__content cursor-effect ${opacity === 1 ? "visible" : "hidden"}`}
            onMouseOver={() => handleMouseOver(2)}
            onMouseOut={handleMouseOut}
            onClick={() => handleLinkClick("/SamsungEg")}
          >
            <p><span><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span> Samsung Engineering clone</p>
            <span>Web Development</span>
          </li>
          <li
            className={`list__content cursor-effect ${opacity === 1 ? "visible" : "hidden"}`}
            onMouseOver={() => handleMouseOver(3)}
            onMouseOut={handleMouseOut}
            onClick={() => handleLinkClick("/Totalks")}
          >
            <p><span><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span> ToTalk</p>
            <span>Web Development</span>
          </li>
          <li
            className={`list__content cursor-effect ${opacity === 1 ? "visible" : "hidden"}`}
            onMouseOver={() => handleMouseOver(4)}
            onMouseOut={handleMouseOut}
            onClick={() => handleLinkClick("/Funfilx")}
          >
            <p><span><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span> Funfilx</p>
            <span>Web Development</span>
          </li>
          <li
            className={`list__content cursor-effect ${opacity === 1 ? "visible" : "hidden"}`}
            onMouseOver={() => handleMouseOver(5)}
            onMouseOut={handleMouseOut}
            onClick={() => handleLinkClick("/PureCss")}
          >
            <p><span><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span> Pure CSS Animation</p>
            <span>Pure CSS</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Work;