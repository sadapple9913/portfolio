import React, {useCallback, useEffect, useState} from 'react'
import Nav from '../components/Nav'
import "../styles/Menu.scss"
import "../styles/Nav.scss"
import Cube from '../components/Cube'
import {useNavigate} from 'react-router-dom'
import { useOpacity } from '../Hooks/UseOpacity';
import { useCursorEffect } from '../Hooks/UseCursorEffect';

function Menu() {
    const navigate = useNavigate();
    const { opacity, handleOpacityChange } = useOpacity();
    const { handleMouseEnter, handleMouseLeave } = useCursorEffect();

    function HomeLink() {
        navigate("/");
    }
    function WorkLink() {
        navigate("/Work");
    }
    function AboutLink() {
        navigate("/About");
    }
    function ContactLink() {
        navigate("/Contact");
    }

    const handleOnClick = () => {
        handleOpacityChange(() => {});
      };
      
    return (
        <div className='Menu__wrap'>
            <div className='bg'></div>
            <Nav handleOnClick={handleOnClick}/>
            <div
                className={`profile__name moveMent ${opacity === 1
                    ? "visible"
                    : "hidden"}`}>
                <p>SangCheal Jung</p>
            </div>
            <div className='Menu__list'>
                <ul>
                    <li
                        onClick={HomeLink}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={`cursor-effect moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>
                        <span>01</span>
                        HOME</li>
                    <li
                        onClick={WorkLink}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={`cursor-effect moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>
                        <span>02</span>
                        WORK</li>
                    <li
                        onClick={AboutLink}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={`cursor-effect moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>
                        <span>03</span>
                        ABOUT</li>
                    <li
                        onClick={ContactLink}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={`cursor-effect moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>
                        <span>04</span>
                        CONTACT</li>
                </ul>
            </div>
            <div
                className={`cube menu ${opacity === 1
                    ? "visible"
                    : "hidden"}`}>
                <Cube/>
            </div>
        </div>
    )
}

export default Menu;