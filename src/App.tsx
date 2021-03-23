import React from 'react'
import GlobalStyle from '../src/styles/GlobalStyle'
import Home from './pages/home'

const src: React.FC = () => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Home></Home>
    </>
  )
}

export default src;