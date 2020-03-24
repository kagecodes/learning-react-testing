import React from 'react'
import * as S from './Header.style'
import Logo from './../../assets/images/logo.png'

const Header = () => {
  return (
    <S.Header data-test="headerComponent">
      <div data-test="wrap">
        <div data-test="logo">
          <img data-test="logoImg" src={Logo} alt="Logo" />
        </div>
      </div>
    </S.Header>
  )
}

export default Header
