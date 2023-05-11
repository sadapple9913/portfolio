import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import "../styles/Totalks.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function Totalks() {
    const [opacity, setOpacity] = useState(0);
    const navigate = useNavigate();

    function webSiteOnClick() {
    setOpacity(0);
    setTimeout(() => {
    window.open("https://sadapple9913.github.io/kakao/", "_blank");
    setOpacity(1);
    },800);
    }

    function handleOnClick() {
    setOpacity(0);
    setTimeout(() => {
    setOpacity(1);
    },800);
    }
    
function moveProjectClick() {
    setOpacity(0);
    setTimeout(() => {
        navigate('/Work');
        setOpacity(1);
        window.scrollTo(0, 0);
    }, 800);
    }
    
    function moveNextClick() {
    setOpacity(0);
    setTimeout(() => {
        navigate('/Funfilx');
        setOpacity(1);
        window.scrollTo(0, 0);
    }, 800);
    }   
        
    useEffect(() => {
        setOpacity(0);
        
        const timeoutId = setTimeout(() => {
            setOpacity(1);
        }, 0);
        
        return () => {
            clearTimeout(timeoutId);
            setOpacity(0);
        };
        }, [navigate]);
    
  return (
    <div className='wrap Totalks'>
        <div className='bg'></div>
    <Nav  handleOnClick={handleOnClick}/>
    <div className={`top_wrap Totalks bgMoveMent ${opacity === 1 ? "visible" : "hidden"}`} >
    <video className={`totalks_video bgMoveMent ${opacity === 1 ? "visible" : "hidden"}`} autoPlay loop muted >
    <source  src={process.env.PUBLIC_URL + '/videos/totalks.mp4'} type="video/mp4" />
    </video>
    </div>
    <div className='info Totalks'>
        <div className={`info_top_wrap moveMent ${opacity === 1 ? "visible" : "hidden"}`}>
            <h2><span>TOTALKS</span></h2>
            <p onClick={webSiteOnClick}><span><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span> View the Website</p>
        </div>
        <div className='info_bottom_wrap'>

        <div className={`info_left_side moveMent ${opacity === 1 ? "visible" : "hidden"}`}>
            <div>
                <h3>CATERORY</h3>
                <p>모바일_앱</p>
            </div>
            <div>
                <h3>YEAR</h3>
                <p>2023.03 ~ 2023.04</p>
            </div>
            <div>
                <h3>USE LANGUAGE</h3>
                <p>HTML, CSS, REACT, SCSS</p>
            </div>
            <div>
                <h3>PROJECT OVERVIEW</h3>
                <p>HTML,CSS 로 기본 레이아웃을 만들었고 REACT 숙련도 상향을 위해 REACT, SCSS로 변환해 작업 하였습니다.</p>
            </div>
            <div>
                <h3>CONTRIBUTIONS</h3>
                <p>FE(100%)</p>
            </div>
        </div>

        <div className={`info_right_side moveMent ${opacity === 1 ? "visible" : "hidden"}`}>
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
    {/* <div className='mockup'>
    <div className='mockup_phone Totalks'></div>
    </div> */}

            <div className={`move__project totalks moveMent ${opacity === 1 ? "visible" : "hidden"}`}  >
                <div className={`info_left_side moveMent ${opacity === 1 ? "visible" : "hidden"}`} onClick={moveProjectClick}>
                <p><span><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span> WORK</p>
                </div>
                <div className={`info_right_side moveMent ${opacity === 1 ? "visible" : "hidden"}`} onClick={moveNextClick}>
                <p><span><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span> Funfilx</p>
                <p>Web development</p>
                </div>
            </div>
    </div>

</div>
  )
}

export default Totalks