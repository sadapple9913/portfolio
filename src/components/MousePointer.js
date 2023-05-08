import React, { useEffect, useRef } from 'react';
import "../styles/MousePointer.scss"

function MousePointer() {
  const cursorRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const target = targetRef.current;

    const handleMouseMove = (event) => {
      const cursorPosition = {
        left: event.clientX,
        top: event.clientY
      };

      const targetPosition = {
        left: target.getBoundingClientRect().left + target.getBoundingClientRect().width / 2,
        top: target.getBoundingClientRect().top + target.getBoundingClientRect().height / 2,
      };

      const distance = {
        x: targetPosition.left - cursorPosition.left,
        y: targetPosition.top - cursorPosition.top
      };

      const hypotenuse = Math.sqrt(distance.x * distance.x + distance.y * distance.y);

      if (hypotenuse < 90) { // triggerDistance 값을 적절히 조정하세요
        const angle = Math.atan2(distance.x, distance.y);
        cursor.style.transform = `translate3d(${targetPosition.left - Math.sin(angle) * hypotenuse / 5}px, ${targetPosition.top - Math.cos(angle) * hypotenuse / 5}px, 0)`;
      } else {
        cursor.style.transform = `translate3d(${cursorPosition.left}px, ${cursorPosition.top}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={targetRef} className="target"></div>
      <div ref={cursorRef} className="cursor"></div>
    </>
  );
}

export default MousePointer;