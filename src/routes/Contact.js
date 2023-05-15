import React from 'react'
import Nav from '../components/Nav'
import "../styles/Contact.scss"
import {useOpacity} from '../Hooks/UseOpacity';
import {useCursorEffect} from '../Hooks/UseCursorEffect';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Cube from '../components/Cube';

function Contact() {
    const {opacity, handleOpacityChange} = useOpacity();
    const {handleMouseEnter, handleMouseLeave} = useCursorEffect();

    const webSiteOnClick = () => {
        handleOpacityChange(() => {
            window.open("https://github.com/sadapple9913/", "_blank")
        });
    };

    const handleOnClick = () => {
        handleOpacityChange(() => {});
    };

    return (
        <div className='contact_wrap'>
            <div className='bg'></div>  
            <div
                className={`cube ${opacity === 1
                    ? "visible"
                    : "hidden"}`}>
                            <Cube/>
            </div>
            <Nav handleOnClick={handleOnClick}/>
            <div className='contact_info'>
                <h2
                    className={`moveMent ${opacity === 1
                        ? "visible"
                        : "hidden"}`}>CONTACT</h2>
                <p
                    className={`moveMent ${opacity === 1
                        ? "visible"
                        : "hidden"}`}>
                    <span>MAIL</span>
                    jsc3441 @ gamil.com</p>
                <p
                    className={`moveMent ${opacity === 1
                        ? "visible"
                        : "hidden"}`}>
                    <span>Phone</span>
                    010-5746-9913</p>
                <p
                    onClick={webSiteOnClick}
                    className={`moveMent ${opacity === 1
                        ? "visible"
                        : "hidden"}`}>
                    <span>GitHub</span>
                    <FontAwesomeIcon icon={faGithub} />
                    </p>
            </div>
        </div>
    )
}

export default Contact