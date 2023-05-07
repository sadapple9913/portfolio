import React, { useState } from 'react';
import Nav from '../components/Nav';
import '../styles/Work.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';

function Work() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const navigate = useNavigate();

  const handleMouseOver = (index) => {
    setHoverIndex(index);
  };

  const handleMouseOut = () => {
    setHoverIndex(null);
  };


  return (
    <div>
      <Nav />
      <div className="list__content__wraper">
        <div
          className={`list__content__img ${
            hoverIndex === 0 ? 'on' : ''
          }`}
        ></div>
        <div
          className={`list__content__img ${
            hoverIndex === 1 ? 'on' : ''
          }`}
        ></div>
        <div
          className={`list__content__img ${
            hoverIndex === 2 ? 'on' : ''
          }`}
        ></div>
        <div
          className={`list__content__img ${
            hoverIndex === 3 ? 'on' : ''
          }`}
        ></div>
        <div
          className={`list__content__img ${
            hoverIndex === 4 ? 'on' : ''
          }`}
        ></div>
        <div
          className={`list__content__img ${
            hoverIndex === 5 ? 'on' : ''
          }`}
        ></div>
      </div>
      <div className="Work__list">
        <ul>
          <li className="list__content title">
            <h1>WORK</h1>
            <span>6</span>
          </li>
          <li
            className="list__content ssEm"
            onMouseOver={() => handleMouseOver(0)}
            onMouseOut={handleMouseOut}
            onClick={samsungEm => navigate("/SamsungEm")}
          >
            <p><span><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span> Samsung-Em clone</p>
            <span>Web Development</span>
          </li>
          <li
            className="list__content cj"
            onMouseOver={() => handleMouseOver(1)}
            onMouseOut={handleMouseOut}
            onClick={cjone => navigate("/Cjone")}
          >
            <p><span><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span> Cj one clone</p>
            <span>Web Development</span>
          </li>
          <li
            className="list__content ssEg"
            onMouseOver={() => handleMouseOver(2)}
            onMouseOut={handleMouseOut}
            onClick={SamsungEg => navigate("/SamsungEg")}
          >
            <p><span><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span> Samsung Engineering clone</p>
            <span>Web Development</span>
          </li>
          <li
            className="list__content tt"
            onMouseOver={() => handleMouseOver(3)}
            onMouseOut={handleMouseOut}
            onClick={Totalks => navigate("/Totalks")}
          >
            <p><span><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span> ToTalk</p>
            <span>Web Development</span>
          </li>
          <li
            className="list__content ff"
            onMouseOver={() => handleMouseOver(4)}
            onMouseOut={handleMouseOut}
            onClick={Funfilx => navigate("/Funfilx")}
          >
            <p><span><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span> Funfilx</p>
            <span>Web Development</span>
          </li>
          <li
            className="list__content css"
            onMouseOver={() => handleMouseOver(5)}
            onMouseOut={handleMouseOut}
            onClick={PureCss => navigate("/PureCss")}
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