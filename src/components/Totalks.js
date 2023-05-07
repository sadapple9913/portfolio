import React from 'react'
import Nav from './Nav'
import "../styles/Totalks.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Totalks() {

    function handleOnClick() {
        window.open("https://sadapple9913.github.io/kakao/", "_blank");
      }

  return (
    <div className='wrap Totalks'>
    <Nav />
    <div className='top_wrap Totalks'></div>
    <div className='info Totalks'>
        <div className='info_top_wrap'>
            <h2><span>TOTALKS</span></h2>
            <p onClick={handleOnClick}><span><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span> View the Website</p>
        </div>
        <div className='info_bottom_wrap'>

        <div className='info_left_side'>
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

        <div className='info_right_side'>
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
    <div className='mockup'>
    <div className='mockup_phone Totalks'></div>
    </div>

    </div>

</div>
  )
}

export default Totalks