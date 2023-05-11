import React, {useCallback, useEffect, useState} from 'react'
import Nav from '../components/Nav'
import "../styles/Menu.scss"
import "../styles/Nav.scss"
import Cube from '../components/Cube'
import {useNavigate} from 'react-router-dom'

function Menu() {
    const [opacity, setOpacity] = useState(0);
    const navigate = useNavigate();

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

    const handleMouseEnter = useCallback(() => {
        document
            .querySelector('.cursor')
            .classList
            .add('cursor-effect');
        document
            .querySelector('.cursor_dot')
            .classList
            .add('cursor-effect');
    }, []);

    const handleMouseLeave = useCallback(() => {
        document
            .querySelector('.cursor')
            .classList
            .remove('cursor-effect');
        document
            .querySelector('.cursor_dot')
            .classList
            .remove('cursor-effect');
    }, []);

    useEffect(() => {
        setOpacity(0);

        const timeoutId = setTimeout(() => {
            setOpacity(1);
        }, 0);

        return() => {
            clearTimeout(timeoutId);
            setOpacity(0);
        };
    }, []);

    function handleOnClick() {
        setOpacity(0);
        setTimeout(() => {
            setOpacity(1);
        }, 800);
    }

    return (
        <div className='Menu__wrap'>
            <div className='bg'></div>
            <Nav handleOnClick={handleOnClick}/>
            <div
                className={`profile__name ${opacity === 1
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
                        className={`cursor-effect menuMove ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>
                        <span>01</span>
                        HOME</li>
                    <li
                        onClick={WorkLink}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={`cursor-effect menuMove ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>
                        <span>02</span>
                        WORK</li>
                    <li
                        onClick={AboutLink}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={`cursor-effect menuMove ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>
                        <span>03</span>
                        ABOUT</li>
                    <li
                        onClick={ContactLink}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={`cursor-effect menuMove ${opacity === 1
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