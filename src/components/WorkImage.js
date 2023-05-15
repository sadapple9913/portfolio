import React from 'react'
import '../styles/WorkImage.scss';

function WorkImage() {
  return (
    <div className='WorkImage_wrap'>
      <svg>
  <defs>
    <clipPath id="cp-roundcorners">
      <rect width="100%" height="100%" fill="gold" fill-opacity=".5"
        rx="60"/>
    </clipPath>
    <symbol id="s-wavy-path">
      <g transform="translate(-50,60)">
        <path d="M903,4.5 C903,4.5 854,42.5341344 803.148089,42.2925317 C753.981141,42.0589344 753.709827,1.76742786 703.354914,2.13371392 C653,2.49999998 652.817934,41.4339085 602.908967,41.9840226 C553,42.5341367 552.597027,1.1857595 503.173513,1.84287976 C453.75,2.50000002 452.074424,40.9050063 403.037212,41.7195701 C354,42.5341339 350.880655,2.72739994 302.940328,2.61369997 C255,2.5 253.131621,42.5536648 203.06581,42.5341357 C153,42.5146065 154,2.5 103.175781,2.5 C52.3515625,2.5 3,42.5341344 3,42.5341344"></path>
      </g>
    </symbol>
    
    <symbol id="s-wavy-path-vert">
      <use xlinkhref="#s-wavy-path" transform=" translate(130,-30) rotate(90)"/>
    </symbol>
    
    <mask id="m-wavy-lines">
      <use xlinkhref="#s-wavy-path" y="-100" className="u-line"/>
      <use xlinkhref="#s-wavy-path" y="-50" className="u-line"/>
      <use xlinkhref="#s-wavy-path" className="u-line"/>
      <use xlinkhref="#s-wavy-path" y="50" className="u-line"/>
      <use xlinkhref="#s-wavy-path" y="100" className="u-line"/>
      <use xlinkhref="#s-wavy-path" y="150" className="u-line"/>
      <use xlinkhref="#s-wavy-path" y="200" className="u-line"/>
      <use xlinkhref="#s-wavy-path" y="250" className="u-line"/>
      <use xlinkhref="#s-wavy-path" y="300" className="u-line"/>
      <use xlinkhref="#s-wavy-path" y="350" className="u-line"/>
      <use xlinkhref="#s-wavy-path" y="400" className="u-line"/>
      <use xlinkhref="#s-wavy-path" y="450" className="u-line"/>
    </mask>
    
    <mask id="m-wavy-lines-vertical">
      <use xlinkhref="#s-wavy-path-vert" x="-50" className="u-line"/>
      <use xlinkhref="#s-wavy-path-vert" className="u-line"/>
      <use xlinkhref="#s-wavy-path-vert" x="50" className="u-line"/>
      <use xlinkhref="#s-wavy-path-vert" x="100" className="u-line"/>
      <use xlinkhref="#s-wavy-path-vert" x="150" className="u-line"/>
      <use xlinkhref="#s-wavy-path-vert" x="200" className="u-line"/>
      <use xlinkhref="#s-wavy-path-vert" x="250" className="u-line"/>
      <use xlinkhref="#s-wavy-path-vert" x="300" className="u-line"/>
      <use xlinkhref="#s-wavy-path-vert" x="350" className="u-line"/>
      <use xlinkhref="#s-wavy-path-vert" x="400" className="u-line"/>
      <use xlinkhref="#s-wavy-path-vert" x="450" className="u-line"/>
      <use xlinkhref="#s-wavy-path-vert" x="500" className="u-line"/>
      <use xlinkhref="#s-wavy-path-vert" x="550" className="u-line"/>
      <use xlinkhref="#s-wavy-path-vert" x="600" className="u-line"/>
      <use xlinkhref="#s-wavy-path-vert" x="650" className="u-line"/>
      <use xlinkhref="#s-wavy-path-vert" x="700" className="u-line"/>
      <use xlinkhref="#s-wavy-path-vert" x="750" className="u-line"/>
      <use xlinkhref="#s-wavy-path-vert" x="800" className="u-line"/>
      <use xlinkhref="#s-wavy-path-vert" x="850" className="u-line"/>
    </mask>
    
    <symbol id="s-path">
      <path d="M0,0 0,800" transform="translate(25,0)"/>
    </symbol>
    
    <mask id="m-lines">
      <use xlinkhref="#s-path" className="u-line"/>
      <use xlinkhref="#s-path" x="50" className="u-line"/>
      <use xlinkhref="#s-path" x="100" className="u-line"/>
      <use xlinkhref="#s-path" x="150" className="u-line"/>
      <use xlinkhref="#s-path" x="200" className="u-line"/>
      <use xlinkhref="#s-path" x="250" className="u-line"/>
      <use xlinkhref="#s-path" x="300" className="u-line"/>
      <use xlinkhref="#s-path" x="350" className="u-line"/>
      <use xlinkhref="#s-path" x="400" className="u-line"/>
      <use xlinkhref="#s-path" x="450" className="u-line"/>
      <use xlinkhref="#s-path" x="500" className="u-line"/>
      <use xlinkhref="#s-path" x="550" className="u-line"/>
      <use xlinkhref="#s-path" x="600" className="u-line"/>
      <use xlinkhref="#s-path" x="650" className="u-line"/>
      <use xlinkhref="#s-path" x="700" className="u-line"/>
      <use xlinkhref="#s-path" x="750" className="u-line"/>
      <use xlinkhref="#s-path" x="800" className="u-line"/>
    </mask>
    
    <mask id="m-circles">
      <circle r="5" cx="0" cy="530" className="u-line"/>
      <circle r="50" cx="0" cy="530" className="u-line"/>
      <circle r="100" cx="0" cy="530" className="u-line"/>
      <circle r="150" cx="0" cy="530" className="u-line"/>
      <circle r="200" cx="0" cy="530" className="u-line"/>
      <circle r="250" cx="0" cy="530" className="u-line"/>
      <circle r="300" cx="0" cy="530" className="u-line"/>
      <circle r="350" cx="0" cy="530" className="u-line"/>
      <circle r="400" cx="0" cy="530" className="u-line"/>
      <circle r="450" cx="0" cy="530" className="u-line"/>
      <circle r="500" cx="0" cy="530" className="u-line"/>
      <circle r="550" cx="0" cy="530" className="u-line"/>
      <circle r="600" cx="0" cy="530" className="u-line"/>
      <circle r="650" cx="0" cy="530" className="u-line"/>
      <circle r="700" cx="0" cy="530" className="u-line"/>
      <circle r="750" cx="0" cy="530" className="u-line"/>
      <circle r="800" cx="0" cy="530" className="u-line"/>
      <circle r="850" cx="0" cy="530" className="u-line"/>
      <circle r="900" cx="0" cy="530" className="u-line"/>
      <circle r="950" cx="0" cy="530" className="u-line"/>
      <circle r="1000" cx="0" cy="530" className="u-line"/>
    </mask>
    
    <filter id="fl-shadow" filterUnits="userSpaceOnUse" x="0" y="0"
              width="800" height="500">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"/>
        <feOffset in="blur" dx="0" dy="0" result="offsetBlr" />
        <feFlood flood-color="rgba(0,0,0,.9)"/>
        <feComposite operator="in" in2="offsetBlr" result="colBlur"/>
        <feMerge>
          <feMergeNode in="colBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
  </defs>
  
  <text y="260" x="400" text-anchor="middle">SVG is magic.</text>
  <g className="g-images" clip-path="url(#cp-roundcorners)">
    
    <image xlinkhref="https://source.unsplash.com/900x600/?flowers" width="100%" height="100%" className="image im-mask-waves-2"/>
    
  </g>
</svg>
    </div>
  )
}

export default WorkImage;