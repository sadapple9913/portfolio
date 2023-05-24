import React, {useEffect, useRef, useState} from 'react'
import Nav from './Nav'
import "../styles/PureCss.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useNavigate} from 'react-router-dom';
import {useOpacity} from '../Hooks/UseOpacity';
import {useCursorEffect} from '../Hooks/UseCursorEffect';
import Cube from './Cube';
import useLoading from '../Hooks/UseLoading';
import LoadingBar from './LoadingBar';
import MySvg from './svg/MySvg';

function PureCss() {
    const navigate = useNavigate();
    const {opacity, handleOpacityChange} = useOpacity();
    const {handleMouseEnter, handleMouseLeave} = useCursorEffect();
    const { loaded, showBar, handleLoad } = useLoading();
    const videoRef = useRef(null);

    const handleOnClick = () => {
        handleOpacityChange(() => {});
    };

    const moveProjectClick = () => {
        handleOpacityChange(() => {
            navigate('/Work');
            window.scrollTo(0, 0);
        });
    };

    const moveNextClick = () => {
        handleOpacityChange(() => {
            navigate('/samsungEm');
            window.scrollTo(0, 0);
        });
    };

    
    useEffect(() => {
        const videoElement = videoRef.current;
        videoElement.preload = 'auto';
        videoElement.oncanplaythrough = () => {};
        
        const loadEvent = () => {
            handleLoad();
        };
      
        // Wait for the 'load' event
        if (document.readyState === 'complete') {
          // If the page has already loaded, call the handler immediately
          loadEvent();
        } else {
          // Otherwise, wait for the page to load
          window.addEventListener('load', loadEvent);
        }
      
        return () => {
          videoElement.oncanplaythrough = null;
          window.removeEventListener('load', loadEvent);
        };
      }, [handleLoad]);

    const handleOpen = () => {
        window.open(process.env.PUBLIC_URL + "/assets/orange.html", "_blank");
        window.open(process.env.PUBLIC_URL + "/assets/facebook_Emoji.html", "_blank");
      };
    

    return (
        <div className='wrap PureCss'>
            {showBar && <LoadingBar isLoading={loaded} />}
            <div className='bg'></div>
            <div className={`background_image bImage ${opacity === 1
                            ? "visible"
                            : "hidden"}`} >
          <MySvg fill1="#E58D09" fill2="#E58D09" />
        </div>
            <div
                className={`cube pureCss ${opacity === 1
                    ? "visible"
                    : "hidden"}`}>
                            <Cube/>
            </div>
            <Nav handleOnClick={handleOnClick}/>
            <div className='top_wrap PureCss'>
                <div
                    className={`mockup_frame_desktop  bgMoveMent ${opacity === 1
                        ? "visible"
                        : "hidden"}`}>
                    <video
                        autoPlay="autoPlay"
                        loop="loop"
                        muted="muted"
                        className={`bgMoveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>
                        <source
                            src={process.env.PUBLIC_URL + '/videos/emoji.mp4'}
                            type="video/mp4"/>
                    </video>
                </div>
                <div
                    className={`mockup_frame_desktop  bgMoveMent ${opacity === 1
                        ? "visible"
                        : "hidden"}`}>
                    <video
                        autoPlay="autoPlay"
                        loop="loop"
                        muted="muted"
                        className={`bgMoveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>
                        <source
                            src={process.env.PUBLIC_URL + '/videos/orange.mp4'}
                            type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className='info PureCss'>
                <div
                    className={`info_top_wrap moveMent ${opacity === 1
                        ? "visible"
                        : "hidden"}`}>
                    <h2>
                        <span>Pure CSS</span>
                    </h2>
                    <p 
                    className='cursor-effect'
                    onClick={handleOpen}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} >
                        <span><FontAwesomeIcon icon="fa-solid fa-arrow-right"/> </span>
                         OPEN</p>
                </div>
                <div className='info_bottom_wrap'>

                    <div
                        className={`info_left_side moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>
                        <div>
                            <h3>CATERORY</h3>
                            <p>Pure CSS</p>
                        </div>
                        <div>
                            <h3>YEAR</h3>
                            <p>2023.02
                            </p>
                        </div>
                        <div>
                            <h3>USE LANGUAGE</h3>
                            <p>HTML, CSS</p>
                        </div>
                        <div>
                            <h3>PROJECT OVERVIEW</h3>
                            <p>CSS를 이용해서 애니메이션 캐릭터와 이모티콘을 제작해봤습니다</p>
                        </div>
                        <div>
                            <h3>CONTRIBUTIONS</h3>
                            <p>FE(100%)</p>
                        </div>
                    </div>

                    <div
                        className={`info_right_side moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>
                        <div>
                            <h3>주요 업무</h3>
                            <ul>CSS 주요 기술
                                <li>- animation을 이용해서 움직임 구현</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div
                    className={`move__project pureCss moveMent ${opacity === 1
                        ? "visible"
                        : "hidden"}`}>
                    <div
                        className={`info_left_side moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}
                        onClick={moveProjectClick}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <p>
                            <span><FontAwesomeIcon icon="fa-solid fa-arrow-right"/></span>
                            WORK</p>
                    </div>
                    <div
                        className={`info_right_side cursor-effect moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}
                        onClick={moveNextClick}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <p>
                            <span><FontAwesomeIcon icon="fa-solid fa-arrow-right"/></span>
                            Samsung Em</p>
                        <p>Wep development</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default PureCss;