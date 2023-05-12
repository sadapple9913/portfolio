import React, { useRef, useState } from 'react';

function ImageComponent() {
  const [hovered, setHovered] = useState(false);
  const imgRef = useRef();

  const handleMouseOver = (event) => {
    setHovered(true);

    // Get the mouse position relative to the image
    const rect = imgRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    imgRef.current.style.transform = `translate(${x / -20}px, ${y / -20}px) rotateX(${y / -20}deg) rotateY(${x / 20}deg)`;
  }
  
  const handleMouseOut = () => {
    setHovered(false);
    imgRef.current.style.transform = '';
  }
  return (
    <img
      className='jelly'
      src={process.env.PUBLIC_URL + '/images/Asset3.svg'}
      alt=''
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      ref={imgRef}
    />
  );
}

export default ImageComponent;