import React from 'react'
import Nav from './Nav'
import "../styles/SamsungEm.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function SamsungEm() {
    
    function handleOnClick() {
        window.open("https://sadapple9913.github.io/samsung_electricity_clone/", "_blank");
      }

  return (
    <div className='wrap samsungEm'>
        <Nav />
        <div className='top_wrap samsungEm'>
        <video autoPlay loop muted poster="../images/samsungEm-Large.png">
        <source src="videos/em_movie.mp4" type="video/mp4" />
        </video>
        </div>
        <div className='info samsungEm'>
            <div className='info_top_wrap'>
                <h2><span>SAMSUNG EM</span> - 삼성전기</h2>
                <p onClick={handleOnClick}><span><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span> View the Website</p>
            </div>
            <div className='info_bottom_wrap'>

             <div className='info_left_side'>
                <div>
                    <h3>CATERORY</h3>
                    <p>기업사이트_웹</p>
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

             <div className='info_right_side'>
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
                    <ul>웹 표준 준수
                        <li>- 웹 접근성 준수</li>
                        <li>- HTML/CSS W3C 유효성검사 PASS</li>
                    </ul>
                </div>
             </div>

            </div>
            <div className='mockup'>
                <div className='mockup_desktop samsungEm'></div>
            </div>

        </div>
    </div>
  )
}

export default SamsungEm