import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/MousePointer.scss";

function MousePointer({ hideCursor }) {
  const [isClicked, setIsClicked] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.pageX, y: e.pageY - window.scrollY });
    };

    const handleMouseClick = () => {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 150);
    };

    const mouseMoveHandler = (e) => {
      requestAnimationFrame(() => handleMouseMove(e));
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("click", handleMouseClick);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("click", handleMouseClick);
    };
  }, []);

  return (
    <>
       <div
        className={`cursor${isClicked ? " Click" : ""}${
          hideCursor ? " hidden" : ""
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`, 
          willChange: "transform", 
        }}
      ></div>
       <div
        className={`cursor_dot${hideCursor ? " hidden" : ""}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`, 
        }}
      >
        <FontAwesomeIcon icon={["fa-solid", "circle"]} />
      </div>
    </>
  );
}

export default MousePointer;