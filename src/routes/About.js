import React, { useCallback } from 'react'
import Nav from '../components/Nav'
import "../styles/About.scss"
import { useOpacity } from '../Hooks/UseOpacity';
import { useNavigate } from 'react-router-dom';

function About() {
  const { opacity, handleOpacityChange } = useOpacity();
  const navigate = useNavigate();

  const handleOnClick = () => {
    handleOpacityChange(() => {});
  };


  return (
    <div className='about_wrap'>

      <Nav handleOnClick={handleOnClick} />

      <h1 className={`moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>ABOUT</h1>
      <div className={`top_wrap about moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>
        <h2 className={`moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>안녕하세요! 저는 신입 front-end developer 정상철입니다.</h2>
        <p className={`moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>저는 HTML, CSS, JavaScript를 활용한 웹 개발에 대한 열정과 경험이 있습니다. 최근에는 React를 배워서, 복잡한 웹 애플리케이션을 빠르게 개발하는 데 도움이 되었습니다.<br/>
        저는 끊임없이 발전하고 성장하려는 열정을 가지고 있으며, 새로운 것을 배우는 것에 열려있습니다. 제가 갖고 있는 기술과 열정을 바탕으로, 여러분의 프로젝트를 함께 발전시키기 위해 노력하겠습니다. 감사합니다!</p>
      </div>
      <div className='bottom_wrap about'>
        <div className='left_side about'>
          <h2 className={`moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>SKILLS</h2>
          <ul className='skill_wrap'>
            <li className={`moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}><img className="java" alt="java-icon" src={process.env.PUBLIC_URL + '/images/java-icon.png'} /> JavaScript</li>
            <li className={`moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}><img className="react" alt="java-icon" src={process.env.PUBLIC_URL + '/images/react-icon.png'} /> React</li>
            <li className={`moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}><img className="HTML" alt="java-icon" src={process.env.PUBLIC_URL + '/images/Html5.icon.png'} /> HTML</li>
            <li className={`moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}><img className="CSS" alt="java-icon" src={process.env.PUBLIC_URL + '/images/CSS3.icon.png'} /> CSS</li>
            <li className={`moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}><img className="SCSS" alt="java-icon" src={process.env.PUBLIC_URL + '/images/SCSS-icon.png'} /> SCSS</li>
            <li className={`moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}><img className="figma" alt="java-icon" src={process.env.PUBLIC_URL + '/images/figma-icon.png'} /> Figma</li>
            <li className={`moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}><img className="photoshop" alt="java-icon" src={process.env.PUBLIC_URL + '/images/Adobe_Photoshop_CC_icon.png'} /> Adobe Photoshop</li>
            <li className={`moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}><img className="illustrator" alt="java-icon" src={process.env.PUBLIC_URL + '/images/Adobe_Illustrator_CC_icon.png'} /> Adobe illustrator</li>
          </ul>
        </div>
        <div className='right_side about'>
        <h2 className={`moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>EDUCATION</h2>
          <p className={`moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>이젠아카데미 평생교육원</p>
          <span className={`moveMent ${opacity === 1
                            ? "visible"
                            : "hidden"}`}>UI&UX 웹& 디자인&프론트엔드 / 2022~2023</span>
        </div>
      </div>
    </div>
  )
}

export default About