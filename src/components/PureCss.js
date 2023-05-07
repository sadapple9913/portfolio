import React from 'react'
import Nav from './Nav'
import "../styles/PureCss.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PureCss() {
  return (
    <div className='wrap PureCss'>
        <div className='bg'></div>
    <Nav />
    <div className='top_wrap PureCss'>
        <div></div>
        <div></div>
    </div>
    <div className='info PureCss'>
        <div className='info_top_wrap'>
            <h2><span>Pure CSS</span></h2>
            <p><span><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span> View the Website</p>
        </div>
        <div className='info_bottom_wrap'>

        <div className='info_left_side'>
            <div>
                <h3>CATERORY</h3>
                <p>Pure CSS</p>
            </div>
            <div>
                <h3>YEAR</h3>
                <p>2023.02 </p>
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

        <div className='info_right_side'>
            <div>
                <h3>주요 업무</h3>
                <ul>CSS 주요 기술
                    <li>- animation을 이용해서 움직임 구현</li>
                </ul>
            </div>
        </div>
        </div>
    </div>

</div>
  )
}

export default PureCss;