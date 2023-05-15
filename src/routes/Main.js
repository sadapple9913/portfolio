import React, {useState, useEffect} from 'react';
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
    const [greeting, setGreeting] = useState({greeting: "HI , I'M", name: "SAGNCHEAL JUNG"});
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setGreeting(prevState => prevState.greeting === "HI , I'M"
<<<<<<< HEAD
                    ? { greeting: "안녕하세요", name: "저는 정상철입니다." }
                    : { greeting: "HI , I'M", name: "SAGNCHEAL JUNG" });
                setIsTransitioning(false);
            }, 700); 
        }, 5000); 
=======
                    ? { greeting: "안녕하세요", name: "제 이름은 정상철입니다." }
                    : { greeting: "HI , I'M", name: "SAGNCHEAL JUNG" });
                setIsTransitioning(false);
            }, 500); 
        }, 3000); 
>>>>>>> 247bb97039e674d949c181eadf391d8182b5e46f
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