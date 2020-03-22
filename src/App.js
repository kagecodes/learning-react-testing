import React from 'react'
import Header from './components/Header'
import Headline from './components/Headline'
import * as S from './App.style'

function App() {
  return (
    <div className="App">
      <Header />
      <S.Main className="main">
        <Headline header="Posts" desc="Click the button to render posts" />
      </S.Main>
    </div>
  )
}

export default App
