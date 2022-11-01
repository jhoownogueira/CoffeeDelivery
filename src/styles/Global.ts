import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
    }
    html {
        font-family: 'Roboto', sans-serif;
        @media (max-width: 1290px) {
            font-size: 93.75%; 
        }
        @media (max-width: 1000px) {
            font-size: 87.50%; 
        }
    }
    body {
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
    button {
        cursor: pointer;
    }
    img {
        display: block;
        max-width: 100%;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    
    *::-webkit-scrollbar {
      width: 4px;
    }
    *::-webkit-scrollbar-track {
      background: white;
    }
    *::-webkit-scrollbar-thumb {
      background-color: red;
      border-radius: 20px;
    }

`

interface GridProps {
    direction: string;
    justify: string;
    align: string;
}

export const GridResponsiveFlex = styled.div<GridProps>`
    width: 100%;
    max-width: 72rem;
    padding: 0 1rem;

    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
`