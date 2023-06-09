import React, {useCallback, useEffect, useRef, useState} from 'react'
import Nav from './Nav'
import "../styles/Cjone.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useNavigate} from 'react-router-dom';
import {useOpacity} from '../Hooks/UseOpacity';
import {useCursorEffect} from '../Hooks/UseCursorEffect';
import Cube from './Cube';
import useLoading from '../Hooks/UseLoading';
import LoadingBar from './LoadingBar';
import MySvg from './svg/MySvg';

function Cjone() {
    const navigate = useNavigate();
    const {opacity, handleOpacityChange} = useOpacity();
    const {handleMouseEnter, handleMouseLeave} = useCursorEffect();
    const { loaded, showBar, handleLoad } = useLoading();
    const videoRef = useRef(null);

    const webSiteOnClick = () => {
        handleOpacityChange(() => {
            window.open("https://sadapple9913.github.io/cjone_clone/", "_blank");
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
            navigate('/samsungEg');
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
        <div className='wrap Cjone'>
            {showBar && <LoadingBar isLoading={loaded} />}
            <div className='bg'></div>
            <div className={`background_image bImage cjone ${opacity === 1
                            ? "visible"
                            : "hidden"}`} >
          <MySvg fill1="#AF3C42" fill2="#AF3C42" />
        </div>
            <div
                className={`cube cjone ${opacity === 1
                    ? "visible"
                    : "hidden"}`}>
                            <Cube/>
            </div>
            <Nav handleOnClick={handleOnClick}/>
            <div className='top_wrap Cjone'>
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
                            src={process.env.PUBLIC_URL + '/videos/cjone_movie.mp4'}
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
                            src={process.env.PUBLIC_URL + '/videos/cjone-tablet.mp4'}
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
                            src={process.env.PUBLIC_URL + '/videos/cjone-phone.mp4'}
                            type="video/mp4"/>
                    </video>
                </div>
          
            </div>
            <div className='info Cjone'>
                <div
                    className={`info_top_wrap moveMent ${opacity === 1
                        ? "visible"
                        : "hidden"}`}>
                    <h2>
                        <span>Cj one</span>
                    </h2>
                    <p
                        className='cursor-effect'
                        onClick={webSiteOnClick}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
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
                            <p>기업사이트_반응형 웹  <br/>웹 표준,웹 접근성 준수</p>
                        </div>
                        <div>
                            <h3>YEAR</h3>
                            <p>2023.02 ~ 2023.04</p>
                        </div>
                        <div>
                            <h3>USE LANGUAGE</h3>
                            <p>HTML, CSS, JS
                            </p>
                        </div>
                        <div>
                            <h3>PROJECT OVERVIEW</h3>
                            <p>HTML, CSS, JS를 사용한 웹사이트 제작 숙련도 향상을 위해 진행하였고, 코드 리팩토링을 통해 코드 효율성과 가독성 향상됨</p>
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
                            <ul>페이지별 주요 기술
                                <li>- 메인 : js를 사용하여 다양한 인터렉션 구현</li>
                            </ul>
                            <ul>코드 리펙토링
                                <li>- JS에서 3회이상 중복되는 코드는 함수로 만들어 호출하여 효율성과 재사용성을 높임</li>
                            </ul>
                            <ul>반응형 웹 개발
                                <li>- PC, Tablet, Mobile
                                </li>
                            </ul>
                            <ul>웹 표준 준수
                                <li>- 웹 접근성 준수</li>
                                <li>- HTML/CSS W3C 유효성검사 PASS</li>
                                <li className='pdf cjone cursor-effect' 
                                    onClick={() => window.open(process.env.PUBLIC_URL + '/assets/cjone.pdf', '_blank')}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}>
                                    <FontAwesomeIcon icon="fa-solid fa-arrow-right"/> 검사 결과</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className={`move__project cjone moveMent ${opacity === 1
                        ? "visible"
                        : "hidden"}`}>
                    <div
                        className={`info_left_side cursor-effect cjone moveMent ${opacity === 1
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
                        className={`info_right_side cursor-effect cjone moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}
                        onClick={moveNextClick}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <p>
                            <span><FontAwesomeIcon icon="fa-solid fa-arrow-right"/></span>
                            Samsung Engineering</p>
                        <p>Web development</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cjone