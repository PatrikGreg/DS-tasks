import React from 'react';
import { Router } from '@reach/router';
import ProductDetail from "./Components/ProductDetail/ProductDetail"
import {GlobalStyle, Wrapper} from './App.styles'

function App() {
  return (
    <>
    <GlobalStyle />
        <Wrapper>
          <Router>
             <ProductDetail path="/"></ProductDetail>
          </Router>
        </Wrapper>
    </>
  );
}

export default App;
