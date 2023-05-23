import React, { useEffect, useState } from 'react'
import "../styles/HamMenu.scss"
import { useLocation, useNavigate } from 'react-router-dom';
import { useOpacity } from '../Hooks/UseOpacity';

function HamMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(location.pathname === "/menu");

  const isMainOrMenu = ['/', '/menu'].includes(location.pathname);
  const { opacity, handleOpacityChange } = useOpacity(isMainOrMenu ? 0 : 600);

  useEffect(() => {
    setIsMenuOpen(location.pathname === "/menu");
  }, [location.pathname]);

  const toggleMenu = () => {
    handleOpacityChange(() => {
      if (isMenuOpen) {
        navigate(-1);
      } else {
        navigate("/menu");
      }
    });
  };

  return (
    <div
      className={`hamburger-btn ${isMenuOpen && "hamburger-btn__click"}`}
      onClick={toggleMenu}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48" className="icons-style">
        <title>Menu</title>
        <circle cx="12" cy="12" r="3" opacity="1" transform-origin="0px 0px"></circle>
        <circle cx="24" cy="12" r="3" opacity="1" transform-origin="0px 0px"></circle>
        <circle cx="36" cy="12" r="3" opacity="1" transform-origin="0px 0px"></circle>
        <circle cx="36" cy="24" r="3" opacity="1" transform-origin="0px 0px"></circle>
        <circle cx="36" cy="36" r="3" opacity="1" transform-origin="0px 0px"></circle>
        <circle cx="24" cy="36" r="3" opacity="1" transform-origin="0px 0px"></circle>
        <circle cx="12" cy="36" r="3" opacity="1" transform-origin="0px 0px"></circle>
        <circle cx="12" cy="24" r="3" opacity="1" transform-origin="0px 0px"></circle>
        <rect x="21" y="21" width="6px" height="6px" rx="3" ry="3" opacity="1" transform-origin="0px 0px"></rect>
        <rect x="21" y="21" width="6px" height="6px" rx="3" ry="3" opacity="1" transform-origin="0px 0px"></rect>
      </svg>
    </div>
  );
}

export default HamMenu;