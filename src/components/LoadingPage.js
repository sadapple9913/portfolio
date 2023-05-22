import React, { useEffect } from 'react';
import '../styles/LoadingPage.scss';


function LoadingPage({ isLoading }) {
  useEffect(() => {
    const paths = document.querySelectorAll('.svg-path');

    for (let path of paths) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.style.animation = `draw 5s linear forwards, color-change 2s ease-in-out infinite`;
    }
  }, []);

  return (
    isLoading ?
    <div className="loading-page">
      <div className='bg'></div>
      <div className="loader">
        <ul className="hexagon-container">
          <li className="hexagon hex_1"></li>
          <li className="hexagon hex_2"></li>
          <li className="hexagon hex_3"></li>
          <li className="hexagon hex_4"></li>
          <li className="hexagon hex_5"></li>
          <li className="hexagon hex_6"></li>
          <li className="hexagon hex_7"></li>
        </ul>
      </div>
      <p className='text'>materializing shapes....</p>
      <p className='copyRight'>Coded by SangCheal JUNG &copy; 2023</p>
    </div> 
    : null
  )
}

export default LoadingPage;