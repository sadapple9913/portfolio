import React, {useCallback, useEffect, useRef, useState} from 'react'
import Nav from './Nav'
import "../styles/Totalks.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useNavigate} from 'react-router-dom';
import {useOpacity} from '../Hooks/UseOpacity';
import {useCursorEffect} from '../Hooks/UseCursorEffect';
import Cube from './Cube';
import useLoading from '../Hooks/UseLoading';
import LoadingBar from './LoadingBar';
import MySvg from './svg/MySvg';

function Totalks() {
    const navigate = useNavigate();
    const {opacity, handleOpacityChange} = useOpacity();
    const {handleMouseEnter, handleMouseLeave} = useCursorEffect();
    const { loaded, showBar, handleLoad } = useLoading();
    const videoRef = useRef(null);

    const webSiteOnClick = useCallback(() => {
        handleOpacityChange(() => {
            window.open("https://sadapple9913.github.io/kakao/", "_blank");
        });
    }, [handleOpacityChange]);

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
            navigate('/Funfilx');
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
        <div className='wrap Totalks'>
            {showBar && <LoadingBar isLoading={loaded} />}
            <div className='bg'></div>
            <div className={`background_image bImage ${opacity === 1
                            ? "visible"
                            : "hidden"}`} >
          <MySvg fill1="#E73446" fill2="#E73446" />
        </div>
            <div
                className={`cube totalks ${opacity === 1
                    ? "visible"
                    : "hidden"}`}>
                            <Cube/>
            </div>
            <Nav handleOnClick={handleOnClick}/>
            <div
                className={`top_wrap Totalks bgMoveMent ${opacity === 1
                    ? "visible"
                    : "hidden"}`}>
                <video
                    ref={videoRef}
                    className={`totalks_video bgMoveMent ${opacity === 1
                        ? "visible"
                        : "hidden"}`}
                    autoPlay="autoPlay"
                    loop="loop"
                    muted="muted">
                    <source src={process.env.PUBLIC_URL + '/videos/totalks.mp4'} type="video/mp4"/>
                </video>
            </div>
            <div className='info Totalks'>
                <div
                    className={`info_top_wrap moveMent ${opacity === 1
                        ? "visible"
                        : "hidden"}`}>
                    <h2>
                        <span>TOTALKS</span>
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
                            <p>REACT로 제작한 모바일_앱</p>
                        </div>
                        <div>
                            <h3>YEAR</h3>
                            <p>2023.03 ~ 2023.04</p>
                        </div>
                        <div>
                            <h3>USE LANGUAGE</h3>
                            <p>REACT, SCSS</p>
                        </div>
                        <div>
                            <h3>PROJECT OVERVIEW</h3>
                            <p>HTML,CSS 로 기본 레이아웃을 만들었고 REACT 숙련도 상향을 위해 JSX, SCSS로 변환해 작업 하였습니다.</p>
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
                            </ul>
                        </div>
                    </div>
                </div>

                <div
                    className={`move__project totalks cursor-effect moveMent ${opacity === 1
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
                            Funfilx</p>
                        <p>Web development</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Totalks