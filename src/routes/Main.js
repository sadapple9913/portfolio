import React, {useState, useEffect, useContext} from 'react';
import "../styles/Main.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Cube from '../components/Cube';
import Nav from '../components/Nav';
import {useNavigate} from 'react-router-dom';
import {useCursorEffect} from '../Hooks/UseCursorEffect';
import {useOpacity} from '../Hooks/UseOpacity';
import useLoading from '../Hooks/UseLoading';
import LoadingPage from '../components/LoadingPage';
import AppContext from '../context/AppContext'
import SvgFive from '../components/svg/SvgFive';
import SvgTwo from '../components/svg/SvgTwo';
import SvgThree from '../components/svg/SvgThree';
import SvgFour from '../components/svg/SvgFour';
import MySvg from '../components/svg/MySvg';



function Main() {
    const navigate = useNavigate();
    const {opacity, handleOpacityChange} = useOpacity();
    const {handleMouseEnter, handleMouseLeave} = useCursorEffect();
    const [moveImage, setMoveImage] = useState(false);
    const [greeting, setGreeting] = useState({greeting: "HI , I'M", name: "SAGNCHEAL JUNG"});
    const [isTransitioning, setIsTransitioning] = useState(false);
    const { hasLoaded, setHasLoaded } = useContext(AppContext);
    const { loaded, showBar, handleLoad } = useLoading(true , 2000);

    useEffect(() => {
        if (!hasLoaded) {
            handleLoad();
            setHasLoaded(true);
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setGreeting(prevState => prevState.greeting === "HI , I'M"
                    ? { greeting: "안녕하세요", name: "저는 정상철입니다." }
                    : { greeting: "HI , I'M", name: "SAGNCHEAL JUNG" });
                setIsTransitioning(false);
            }, 700); 
        }, 1000000); 
        return () => clearInterval(interval);
    }, []);

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
            navigate('/Work');
        });
    };

    const aboutLinkOnClick = () => {
        handleOpacityChange(() => {
            navigate('/About');
            window.scrollTo(0, 0);
        });
    };

    return (
        <div className='main_wrap main'>
            {showBar && <LoadingPage isLoading={loaded} />}
            <div className='bg'></div>
            <div className='background_image bImage' >
            <img className={`svg5_box ${opacity === 1
                            ? "visible"
                            : "hidden"} ${moveImage ? 'move' : ''}`} src={process.env.PUBLIC_URL + '/images/221.png'} />
            <div className={`svg3_box ${moveImage
                        ? "move"
                        : ""}`}>
            <SvgThree fill1="#f0ffa6" fill2="#ffb3c2" />
            </div>
            <div className={`svg1_box ${moveImage
                        ? "move"
                        : ""}`}>
            <MySvg fill1="#78ffd1" fill2="#f0ffa6"/>
            </div>

            <div className={`svg4_box ${moveImage
                        ? "move"
                        : ""}`}>
            <SvgFour fill1="#99b9ff" fill2="#78ffd1" />
            </div>
            <div className={`svg2_box ${moveImage
                        ? "move"
                        : ""}`}>
            <SvgTwo fill1="#99b9ff" fill2="#ffb3c2" />
            </div>




           </div>
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
                            : "hidden"} ${isTransitioning ? 'fade' : ''}`}>
                        {greeting.greeting}
                    </span>
                    <span
                        className={` wave cursor-effect ${opacity === 1
                            ? "visible"
                            : "hidden"} ${isTransitioning ? 'fade' : ''}`}
                        onMouseOver={handleMouseOverText}
                        onMouseOut={handleMouseOutText}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        {greeting.name}
                    </span>
                </h1>
                <p
                    className={`devloper moveMent ${opacity === 1
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