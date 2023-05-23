import React from 'react';

const SvgThree = ({fill1, fill2}) => (
  <svg className="svg3 shake" id="_레이어_2" data-name="레이어 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 269.57 211.83">
    <defs>
      <linearGradient id="_무제_그라디언트_60" data-name="무제 그라디언트 60" x1="0" y1="70%" x2="20" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor={fill2}/>
        <stop offset="100%" stopColor={fill1}/>
      </linearGradient>
    </defs>
    <g id="_레이어_1-2" data-name="레이어 1">
      <path className="cls-1" style={{
        fill: 'none',
        stroke: 'url(#_무제_그라디언트_60)',
        strokeLinecap: 'round',
        strokeMiterlimit: 10,
        strokeWidth: '85px',
      }} d="m45.78,169.33c-13.33-52.39,15.54-105.3,57.5-121.48,48.95-18.87,112.92,13.33,123.78,77.06"/>
    </g>
  </svg>
);

export default SvgThree;