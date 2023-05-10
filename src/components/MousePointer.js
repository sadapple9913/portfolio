import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/MousePointer.scss";

function MousePointer() {
  const [isClicked, setIsClicked] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursorDot = document.querySelector(".cursor_dot");

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
        className={`cursor${isClicked ? ' Click' : ''}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`, // transform을 사용하여 이동합니다.
          willChange: "transform", // GPU 가속을 사용하기 위해 will-change를 추가합니다.
        }}
      ></div>
      <div
        className='cursor_dot'
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`, // transform을 사용하여 이동합니다.
        }}
      >
        <FontAwesomeIcon icon={["fa-solid", "circle"]} />
      </div>
    </>
  );
}

export default MousePointer;