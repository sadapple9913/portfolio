import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/MousePointer.scss";

function MousePointer() {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursorDot = document.querySelector(".cursor_dot");

    const handleMouseMove = (e) => {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY - window.scrollY + "px";
      cursorDot.style.left = e.pageX + "px";
      cursorDot.style.top = e.pageY - window.scrollY + "px";
    };

    const handleMouseClick = () => {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 150);
    };

    window.addEventListener("scroll", handleMouseMove);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleMouseClick);

    return () => {
      window.removeEventListener("scroll", handleMouseMove);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleMouseClick);
    };
  }, []);

  return (
    <>
      <div className={`cursor${isClicked ? ' Click' : ''}`}></div>
      <div className='cursor_dot'><FontAwesomeIcon icon={["fa-solid", "circle"]} /></div>
    </>
  );
}

export default MousePointer;