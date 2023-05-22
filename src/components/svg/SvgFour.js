import React from 'react';

const SvgFour = ({fill1, fill2}) => {
  const lighterFill1 = fill1 + '80'; 

  return (
    <svg className='svg4 shake' id="_레이어_2" data-name="레이어 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265.94 278.59">
      <defs>
        <linearGradient id="_무제_그라디언트_61" x1="60%" y1="10%" x2="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={fill2}/>
          <stop offset="50%" stopColor={lighterFill1}/>
          <stop offset="100%" stopColor={fill1}/>
        </linearGradient>
      </defs>
      <g id="_레이어_1-2" data-name="레이어 1">
        <path className="cls-1" style={{
          fill: 'none',
          stroke: 'url(#_무제_그라디언트_61)',
          strokeLinecap: 'round',
          strokeMiterlimit: 10,
          strokeWidth: '85px',
        }} d="m42.5,88.43c1.94-2.96,31.23-46.07,84.23-45.93,42.63.11,79.9,28.15,92.25,64.5,18.17,53.47-21.81,112.51-73.2,126.07-40.19,10.61-75.28-9.78-83.23-14.66"/>
      </g>
    </svg>
  );
};

export default SvgFour;