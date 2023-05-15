import React, {useState} from 'react';
import "../styles/Main.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Cube from '../components/Cube';
import Nav from '../components/Nav';
import {useNavigate} from 'react-router-dom';
import {useCursorEffect} from '../Hooks/UseCursorEffect';
import {useOpacity} from '../Hooks/UseOpacity';
import WorkImage from '../components/WorkImage';


function Main() {
    const navigate = useNavigate();
    const {opacity, handleOpacityChange} = useOpacity();
    const {handleMouseEnter, handleMouseLeave} = useCursorEffect();
    const [moveImage, setMoveImage] = useState(false);

    const handleMouseOverText = () => {
        setMoveImage(true);
    };

    const handleMouseOutText = () => {
        setMoveImage(false);
    };

    const handleOnClick = () => {
        handleOpacityChange(() => {});
    };

    const projectOnClick = () => {
        handleOpacityChange(() => {
            window.open("https://github.com/sadapple9913/", "_blank");
        });
    };

    const aboutLinkOnClick = () => {
        handleOpacityChange(() => {
            navigate('/About');
            window.scrollTo(0, 0);
        });
    };

    return (
        <div className='main_wrap'>
            <div className='bg'></div>
            {/* <div><WorkImage /></div> */}
            <Nav handleOnClick={handleOnClick}/>
            <div
                className={`cube ${opacity === 1
                    ? "visible"
                    : "hidden"}`}>
                <div
                    className={`cubeMove ${moveImage
                        ? "move-right"
                        : ""}`}>
                    <div className={`cubeRotate ${moveImage
                        ? "rotate"
                        : ""}`}>
                            <Cube/>
                    </div>
                </div>
            </div>
            <div className='main__info'>
                <h1>
                    <span
                        className={`span ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>HI , I'M
                    </span>
                    <span
                        className={` wave cursor-effect ${opacity === 1
                            ? "visible"
                            : "hidden"}`}
                        onMouseOver={handleMouseOverText}
                        onMouseOut={handleMouseOutText}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>SAGNCHEAL JUNG</span>
                </h1>
                <p
                    className={`moveMent ${opacity === 1
                        ? "visible"
                        : "hidden"}`}>
                    <span>I'm front-end developer</span>
                </p>
                <div className='more__box'>
                    <span
                        className={`cursor-effect moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={projectOnClick}>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right"/>
                        see my projects</span>
                    <span
                        className={`cursor-effect moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={aboutLinkOnClick}>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right"/>
                        more about me</span>
                </div>
            </div>
        </div>
    );
}

export default Main;