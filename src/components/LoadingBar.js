import React from 'react'
import '../styles/LoadingBar.scss';

function LoadingBar({isLoading }) {
  return (
    <div className={`loading-bar ${ isLoading  ? 'loading' : ''}`}></div>
  )
}

export default LoadingBar;