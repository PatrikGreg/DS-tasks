import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%
    }

    body {
        height: 100%;
        margin: 0;
        padding: 0 15%;
        display: flex;
        flex-direction: column;
        justify-content:  center;
    }

    * {
        box-sizing: border-box;
        //border: solid 1px black;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    border: solid 1px black;
    
`