import React, { useEffect, useRef } from 'react'
import Nav from './Nav'
import "../styles/SamsungEm.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useNavigate} from 'react-router-dom';
import { useOpacity } from '../Hooks/UseOpacity';
import { useCursorEffect } from '../Hooks/UseCursorEffect';
import Cube from './Cube';
import LoadingBar from './LoadingBar';
import useLoading from '../Hooks/UseLoading';
import MySvg from './svg/MySvg';


function SamsungEm() {
const navigate = useNavigate();
const { opacity, handleOpacityChange } = useOpacity();
const { handleMouseEnter, handleMouseLeave } = useCursorEffect();
const { loaded, showBar, handleLoad } = useLoading();
const videoRef = useRef(null);

const webSiteOnClick = () => {
    handleOpacityChange(() => {
        window.open("https://sadapple9913.github.io/samsung_electricity_clone/", "_blank");
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
        navigate('/Cjone');
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
        <>
        <div className='wrap samsungEm'>
        {showBar && <LoadingBar isLoading={loaded} />}
            <div className='bg'></div>
            <div className={`background_image bImage ${opacity === 1
                            ? "visible"
                            : "hidden"}`} >
          <MySvg fill1="#1428A0" fill2="#1428A0" />
        </div>
            <div
                className={`cube samsungEm ${opacity === 1
                    ? "visible"
                    : "hidden"}`}>
                            <Cube/>
            </div>
            <Nav handleOnClick={handleOnClick}/>
            <div className='top_wrap samsungEm'>
                <div className={`mockup_frame_desktop  bgMoveMent ${opacity === 1
                                        ? "visible"
                                        : "hidden"}`}>
                <video
                ref={videoRef}
                autoPlay="autoPlay"
                loop="loop"
                muted="muted">
                <source src={process.env.PUBLIC_URL + '/videos/samsungEm.mp4'} type="video/mp4"/>
                </video>
                

                </div>

            </div>
            <div className='info samsungEm'>
                <div
                    className={`info_top_wrap moveMent ${opacity === 1
                        ? "visible"
                        : "hidden"}`}>
                    <h2>
                        <span>SAMSUNG EM</span>
                        - 삼성전기</h2>
                    <p  className='cursor-effect'
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
                            <p>기업사이트_웹 <br/>웹 표준,웹 접근성 준수</p>
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
                                <li>- 서브1 : form속성을 사용하여 고객센터 페이지를 구성</li>
                                <li>- 서브2 : table속성을 사용하여 채용정보 페이지를 구성</li>
                            </ul>
                            <ul>코드 리펙토링
                                <li>- JS에서 3회이상 중복되는 코드는 함수로 만들어 호출하여 효율성과 재사용성을 높임</li>
                            </ul>
                            <ul>웹 표준 준수
                                <li>- 웹 접근성 준수</li>
                                <li>- HTML/CSS W3C 유효성검사 PASS</li>
                                <li className='pdf cursor-effect' 
                                    onClick={() => window.open(process.env.PUBLIC_URL + '/assets/samsungEm1.pdf', '_blank')}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}>
                                    <FontAwesomeIcon icon="fa-solid fa-arrow-right"/> 검사 결과</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div
                    className={`move__project moveMent ${opacity === 1
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
                            Cj one</p>
                        <p>Web development</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SamsungEm;