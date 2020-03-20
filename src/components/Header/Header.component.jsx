import React from 'react'
import * as S from './Header.style'
import Logo from './../../assets/images/logo.png'

const Header = () => {
  return (
    <S.Header className="headerComponent">
      <div className="wrap">
        <div className="logo">
            <img className="logoImg" src={Logo} alt="Logo"/>
        </div>
      </div>
    </S.Header>
  )
}

export default Header
