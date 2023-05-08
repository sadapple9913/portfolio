import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/MousePointer.scss";

function MousePointer() {
  const [isClicked, setIsClicked] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursorDot = document.querySelector(".cursor_dot");
    let debounceTimeout;

    const handleMouseMove = (e) => {
      // Debouncing을 적용하여 일정 시간 내에 연속된 이벤트는 무시합니다.
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        setPosition({ x: e.pageX, y: e.pageY - window.scrollY });
      }, 10);
    };

    const handleMouseClick = () => {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 150);
    };

    const handleWindowScroll = () => {
      // 스크롤 이벤트에서 커서 위치를 업데이트합니다.
      setPosition((prevPosition) => ({
        ...prevPosition,
        y: prevPosition.y - window.scrollY,
      }));
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleMouseClick);
    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleMouseClick);
      window.removeEventListener("scroll", handleWindowScroll);
      clearTimeout(debounceTimeout);
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