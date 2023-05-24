import React, {useEffect, useRef, useState} from 'react'
import Nav from './Nav'
import "../styles/Funfilx.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useOpacity } from '../Hooks/UseOpacity';
import { useCursorEffect } from '../Hooks/UseCursorEffect';
import { useNavigate } from 'react-router-dom';
import Cube from './Cube';
import useLoading from '../Hooks/UseLoading';
import LoadingBar from './LoadingBar';
import MySvg from './svg/MySvg';

function Funfilx() {
const navigate = useNavigate();
const { opacity, handleOpacityChange } = useOpacity();
const { handleMouseEnter, handleMouseLeave } = useCursorEffect();
const { loaded, showBar, handleLoad } = useLoading();
const videoRef = useRef(null);

        const webSiteOnClick = () => {
            handleOpacityChange(() => {
                window.open("https://sadapple9913.github.io/funfilx/", "_blank");
            });
          };
        
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
              navigate('/PureCss');
              window.scrollTo(0, 0);
            });
          };

          
          useEffect(() => {
            const videoElement = videoRef.current;
            videoElement.preload = 'auto';
        
            let videoLoaded = false;
            let pageLoaded = false;
        
            const checkLoad = () => {
                if (videoLoaded && pageLoaded) {
                    handleLoad();
                }
            };
        
            videoElement.oncanplaythrough = () => {
                videoLoaded = true;
                checkLoad();
            };
        
            const loadEvent = () => {
                pageLoaded = true;
                checkLoad();
            };
        
            if (document.readyState === 'complete') {
                loadEvent();
            } else {
                window.addEventListener('load', loadEvent);
            }
        
            return () => {
                videoElement.oncanplaythrough = null;
                window.removeEventListener('load', loadEvent);
            };
        }, [handleLoad]);

    useEffect(() => {
        const videoElement = videoRef.current;
    
        videoElement.preload = 'auto';
    
        videoElement.oncanplaythrough = () => {
        };
    
        return () => {
          videoElement.oncanplaythrough = null;
        };
      }, []);
  

    return (
        <div className='wrap funfilx'>
            {showBar && <LoadingBar isLoading={loaded} />}
            <div className='bg'></div>
            <div className={`background_image bImage ${opacity === 1
                            ? "visible"
                            : "hidden"}`} >
          <MySvg fill1="#E50914" fill2="#E50914" />
        </div>
            <div
                className={`cube funfilx ${opacity === 1
                    ? "visible"
                    : "hidden"}`}>
                            <Cube/>
            </div>
            <Nav handleOnClick={handleOnClick}/>
            <div className='top_wrap funfilx'>
            <div
                    className={`mockup_frame_desktop  bgMoveMent ${opacity === 1
                        ? "visible"
                        : "hidden"}`}>
                    <video
                        ref={videoRef}
                        autoPlay="autoPlay"
                        loop="loop"
                        muted="muted"
                        className={`bgMoveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>
                        <source
                            src={process.env.PUBLIC_URL + '/videos/funfilx-desktop.mp4'}
                            type="video/mp4"/>
                    </video>
                </div>
                <div
                    className={`mockup_frame_tablet  bgMoveMent ${opacity === 1
                        ? "visible"
                        : "hidden"}`}>
                    <video
                        ref={videoRef}
                        autoPlay="autoPlay"
                        loop="loop"
                        muted="muted"
                        className={`bgMoveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>
                        <source
                            src={process.env.PUBLIC_URL + '/videos/funfilx-tablet.mp4'}
                            type="video/mp4"/>
                    </video>
                </div>
                <div
                    className={`mockup_frame_phone  bgMoveMent ${opacity === 1
                        ? "visible"
                        : "hidden"}`}>
                    <video
                        ref={videoRef}
                        autoPlay="autoPlay"
                        loop="loop"
                        muted="muted"
                        className={`bgMoveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>
                        <source
                            src={process.env.PUBLIC_URL + '/videos/funfilx-phone.mp4'}
                            type="video/mp4"/>
                    </video>
                </div>
                          
            </div>
            <div className='info funfilx'>
                <div
                    className={`info_top_wrap moveMent ${opacity === 1
                        ? "visible"
                        : "hidden"}`}>
                    <h2>
                        <span>FunFilx</span>
                    </h2>
                    <p 
                    className='cursor-effect'
                    onClick={webSiteOnClick}
                onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} >
                        <span><FontAwesomeIcon icon="fa-solid fa-arrow-right"/> </span>
                         Website</p>
                </div>
                <div className='info_bottom_wrap'>

                    <div
                        className={`info_left_side moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>
                        <div>
                            <h3>CATERORY</h3>
                            <p>REACT로 제작한 반응형_웹</p>
                        </div>
                        <div>
                            <h3>YEAR</h3>
                            <p>2023.03 ~ 2023.04</p>
                        </div>
                        <div>
                            <h3>USE LANGUAGE</h3>
                            <p>HTML, REACT, CSS</p>
                        </div>
                        <div>
                            <h3>PROJECT OVERVIEW</h3>
                            <p>React와 일부 컴포넌트를 styled-component를 사용하여 제작하였고 The Movie DataBase API를 사용하
                                영화정보를 가져오게 만들었습니다.</p>
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
                            <ul>React/SCSS 주요 기술
                                <li>- SPA 방식으로 개발</li>
                                <li>- Hooks(UseEffect,UseState)</li>
                                <li>- Axios 비동기 라이브러리 사용</li>
                                <li>- FireBase를 이용한 인증, 실시간 데이터 베이스, 스토리지 구현</li>
                                <li>- FontAwesome을 이용한 아이콘 연결</li>
                                <li>- Props를 통해 컴포넌트에게 값 전달</li>
                                <li>- Styled-Component 사용하여 일부 컴포넌트 구현</li>
                            </ul>
                            <ul>반응형 웹 개발
                                <li>- PC, Tablet, Mobile</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div
                    className={`move__project funfilx moveMent ${opacity === 1
                        ? "visible"
                        : "hidden"}`}>
                    <div
                        className={`info_left_side cursor-effect moveMent ${opacity === 1
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
                            Pure Css</p>
                        <p>Pure Css</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Funfilx;