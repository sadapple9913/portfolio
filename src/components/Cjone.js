import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import "../styles/Cjone.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function Cjone() {
    const [opacity, setOpacity] = useState(0);
    const navigate = useNavigate();
    
    function webSiteOnClick() {
    setOpacity(0);
    setTimeout(() => {
    window.open("https://sadapple9913.github.io/cjone_clone/", "_blank");
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
        navigate('/SamsungEg');
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
        <div className='wrap Cjone'>
            <div className='bg'></div>
        <Nav  handleOnClick={handleOnClick}/>
        <div className='top_wrap Cjone'>
            <video autoPlay loop muted className={`bgMoveMent ${opacity === 1 ? "visible" : "hidden"}`}>
            <source src={process.env.PUBLIC_URL + '/videos/cjone_movie.mp4'} type="video/mp4" />
        </video>
        </div>
        <div className='info Cjone'>
            <div className={`info_top_wrap moveMent ${opacity === 1 ? "visible" : "hidden"}`}>
                <h2><span>Cj one</span></h2>
                <p onClick={webSiteOnClick}><span><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span> View the Website</p>
            </div>
            <div className='info_bottom_wrap'>

            <div className={`info_left_side moveMent ${opacity === 1 ? "visible" : "hidden"}`}>
                <div>
                    <h3>CATERORY</h3>
                    <p>기업사이트_반응형 웹</p>
                </div>
                <div>
                    <h3>YEAR</h3>
                    <p>2023.02 ~ 2023.04</p>
                </div>
                <div>
                    <h3>USE LANGUAGE</h3>
                    <p>HTML, CSS, JS </p>
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

            <div className={`info_right_side moveMent ${opacity === 1 ? "visible" : "hidden"}`}>
                <div>
                    <h3>주요 업무</h3>
                    <ul>페이지별 주요 기술
                        <li>- 메인 : js를 사용하여 다양한 인터렉션 구현</li>
                        <li>- 서브1 : form속성을 사용하여 고객센터 페이지를 구성</li>
                        <li>- 서브2 : table속성을 사용하여 채용정보 페이지를 구성</li>
                    </ul>
                    <ul>코드 리펙토링
                        <li>- JS에서 3회이상 중복되는 코드는 함수로 만들어 호출하여 효율성과 재사용성을 높임</li>
                        <li>- Js에서 resize나 reroad시 업데이트가 필요한 데이터를 관리하는 함수를 만들었고, 이를통해 데이터 관리 효율증가</li>
                    </ul>
                    <ul>반응형 웹 개발
                        <li>- PC, Tablet, Mobile </li>
                    </ul>
                    <ul>웹 표준 준수
                        <li>- 웹 접근성 준수</li>
                        <li>- HTML/CSS W3C 유효성검사 PASS</li>
                    </ul>
                </div>
            </div>
            </div>
        {/* <div className='mockup'>
        <div className='mockup_desktop Cjone'></div>
        <div className='mockup_tablet Cjone'></div>
        <div className='mockup_phone Cjone'></div>
        </div> */}
            <div className={`move__project cjone moveMent ${opacity === 1 ? "visible" : "hidden"}`}  >
                <div className={`info_left_side cjnoe moveMent ${opacity === 1 ? "visible" : "hidden"}`} onClick={moveProjectClick}>
                <p><span><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span> WORK</p>
                </div>
                <div className={`info_right_side cjnoe moveMent ${opacity === 1 ? "visible" : "hidden"}`} onClick={moveNextClick}>
                <p><span><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span> Samsung Engineering</p>
                <p>Web development</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Cjone