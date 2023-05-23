import React, {useCallback, useEffect, useState} from 'react'
import Nav from '../components/Nav'
import "../styles/Menu.scss"
import "../styles/Nav.scss"
import Cube from '../components/Cube'
import {useNavigate} from 'react-router-dom'
import { useOpacity } from '../Hooks/UseOpacity';
import { useCursorEffect } from '../Hooks/UseCursorEffect';
import SvgThree from '../components/svg/SvgThree'
import MySvg from '../components/svg/MySvg'
import SvgFour from '../components/svg/SvgFour'
import SvgTwo from '../components/svg/SvgTwo'

function Menu() {
    const navigate = useNavigate();
    const {opacity, handleOpacityChange} = useOpacity(100);
    const [moveImage, setMoveImage] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    const handleMouseEnter = useCallback((item) => {
        document.querySelector('.cursor').classList.add('cursor-effect');
        document.querySelector('.cursor_dot').classList.add('cursor-effect');
        setActiveItem(item);
      }, []);
    
      const handleMouseLeave = useCallback(() => {
        document.querySelector('.cursor').classList.remove('cursor-effect');
        document.querySelector('.cursor_dot').classList.remove('cursor-effect');
        setActiveItem(null);
      }, []);

    const HomeLink = () => {
        handleOpacityChange(() => {
            navigate('/');
        },0);
        };

    const WorkLink = () => {
        handleOpacityChange(() => {
            navigate('/Work');
        });
        };

    const AboutLink = () => {
        handleOpacityChange(() => {
            navigate('/About');
        });
        };

    const ContactLink = () => {
        handleOpacityChange(() => {
            navigate('/Contact');

        });
        };

    const handleOnClick = () => {
        handleOpacityChange(() => {});
      };
      
    return (
        <div className='main_wrap menu'>
            <div className='bg'></div>

            <div className='background_image bImage' >

            <img className={`svg5_box ${opacity === 1 ? "" : "hidden"} ${activeItem === 'home' ? "on" : ""} ${activeItem === 'about' ? "on" : ""}`} src={process.env.PUBLIC_URL + '/images/221.png'} />

            <div className={`svg3_box ${opacity === 1 ? "" : "hidden"} ${activeItem === 'home' ? "on" : ""} ${activeItem === 'contact' ? "on" : ""}`}>
                <SvgThree fill1="#f0ffa6" fill2="#ffb3c2" />
            </div>

            <div className={`svg1_box ${opacity === 1 ? "" : "hidden"} ${activeItem === 'home' ? "on" : ""} ${activeItem === 'work' ? "on" : ""}`}>
                <MySvg fill1="#78ffd1" fill2="#f0ffa6"/>
            </div>

            <div className={`svg4_box ${opacity === 1 ? "" : "hidden"} ${activeItem === 'home' ? "on" : ""} ${activeItem === 'about' ? "on" : ""}`}>
                <SvgFour fill1="#99b9ff" fill2="#78ffd1" />
            </div>

            <div className={`svg2_box ${opacity === 1 ? "" : "hidden"} ${activeItem === 'home' ? "on" : ""} ${activeItem === 'contact' ? "on" : ""}`}>
                <SvgTwo fill1="#99b9ff" fill2="#ffb3c2" />
            </div>

            </div>

            <Nav handleOnClick={handleOnClick} />
            <div
                className={`profile__name cursor-effect moveMent ${opacity === 1
                    ? "visible"
                    : "hidden"}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                <p>SangCheal Jung</p>
            </div>
            <div className='Menu__list'>
                <ul>
                    <li
                        onClick={HomeLink}
                        onMouseEnter={() => handleMouseEnter('home')}
                        onMouseLeave={handleMouseLeave}
                        className={`cursor-effect moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>
                        <span>01</span>
                        HOME</li>
                    <li
                        onClick={WorkLink}
                        onMouseEnter={() => handleMouseEnter('work')}
                        onMouseLeave={handleMouseLeave}
                        className={`cursor-effect moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"} `}>
                        <span>02</span>
                        WORK</li>
                    <li
                        onClick={AboutLink}
                        onMouseEnter={() => handleMouseEnter('about')}
                        onMouseLeave={handleMouseLeave}
                        className={`cursor-effect moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"} `}>
                        <span>03</span>
                        ABOUT</li>
                    <li
                        onClick={ContactLink}
                        onMouseEnter={() => handleMouseEnter('contact')}
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