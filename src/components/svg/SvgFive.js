import React from 'react';

const SvgFive = ({fill1 ,fill2 }) => (
  <svg className='svg5' id="_레이어_2" data-name="레이어 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84.05 84.05">
    <defs>
      <linearGradient id="grad5" x1="0%" y1="95%" x2="0%" y2="0%">
        <stop offset="0%" style={{stopColor:fill1, stopOpacity:1}} />
        <stop offset="100%" style={{stopColor:fill2, stopOpacity:1}} />
      </linearGradient>
      <radialGradient id="shine" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" style={{stopColor:'#fff', stopOpacity:0.5}} />
        <stop offset="100%" style={{stopColor:'#fff', stopOpacity:0}} />
      </radialGradient>
      <filter id="blur" x="0" y="0">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
      </filter>
    </defs>
    <g id="_레이어_1-2" data-name="레이어 1">
      <path className="cls-5" d="m42.03,84.03c5.78.22,11.18-.99,16.18-3.62,5.21-1.69,9.71-4.59,13.52-8.68,4.1-3.8,6.99-8.31,8.68-13.52,2.63-5.01,3.84-10.4,3.62-16.18l-1.5-11.17c-2-7.12-5.6-13.29-10.8-18.53-2.83-2.19-5.67-4.38-8.5-6.57C56.67,1.96,49.61,.05,42.03,.03c-5.78-.22-11.18.99-16.18,3.62-5.21,1.69-9.71,4.59-13.52,8.68-4.1,3.8-6.99,8.31-8.68,13.52C1.01,30.85-.19,36.24,.03,42.03l1.5,11.17c2,7.12,5.6,13.29,10.8,18.53,2.83,2.19,5.67,4.38,8.5,6.57,6.55,3.8,13.62,5.71,21.2,5.73h0Z" fill="url(#grad5)"/>
      <path className="cls-5" d="m42.03,84.03c5.78.22,11.18-.99,16.18-3.62,5.21-1.69,9.71-4.59,13.52-8.68,4.1-3.8,6.99-8.31,8.68-13.52,2.63-5.01,3.84-10.4,3.62-16.18l-1.5-11.17c-2-7.12-5.6-13.29-10.8-18.53-2.83-2.19-5.67-4.38-8.5-6.57C56.67,1.96,49.61,.05,42.03,.03c-5.78-.22-11.18.99-16.18,3.62-5.21,1.69-9.71,4.59-13.52,8.68-4.1,3.8-6.99,8.31-8.68,13.52C1.01,30.85-.19,36.24,.03,42.03l1.5,11.17c2,7.12,5.6,13.29,10.8,18.53,2.83,2.19,5.67,4.38,8.5,6.57,6.55,3.8,13.62,5.71,21.2,5.73h0Z" fill="url(#shine)" filter="url(#blur)"/>
    </g>
  </svg>
);

export default SvgFive;