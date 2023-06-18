import React, {useCallback, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "../styles/Nav.scss"
import HamMenu from './HamMenu';
import {useNavigate} from 'react-router-dom';
import {useOpacity} from '../Hooks/UseOpacity';
import {useCursorEffect} from '../Hooks/UseCursorEffect';

function Nav({handleOnClick}) {
    const navigate = useNavigate();
    const {opacity, handleOpacityChange} = useOpacity(50);
    const {handleMouseEnter, handleMouseLeave} = useCursorEffect();

    const delayedNavigate = useCallback(() => {
        handleOpacityChange(() => navigate('/'));
    }, [opacity]);

    return (
        <div className='nav__wrap '>
            <div className='left_side'>
                <span
                    className='cursor-effect'
                    onClick={delayedNavigate}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <FontAwesomeIcon icon="fa-solid fa-cube"/>
                </span>
            </div>
            <div className='right_side'>
                <span
                    className='cursor-effect'
                    onClick={handleOnClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    ><HamMenu/></span>
            </div>
        </div>
    )
}

export default Nav