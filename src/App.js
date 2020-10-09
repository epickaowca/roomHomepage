import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components'
import * as theme from './styleConfig'
import { Provider } from 'react-redux'
import { store } from './store'
import styled from 'styled-components'
//components
import MainSection from './View/MainSection'
import SecondSection from './View/SecondSection'

const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  ${theme.media.desktop3}{
    max-width: 1980px;
    max-height: 1070px;
    margin: auto;

  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <MainWrapper>
          <MainSection />
          <SecondSection />
        </MainWrapper>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
