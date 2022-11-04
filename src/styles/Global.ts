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

    
    // Titles 
    h1, h2, h3, h4 {
        font-family: 'Baloo 2', sans-serif;
        line-height: 130%;
    }

    h2, h3, h4 {
        color: ${props => props.theme["base-subtitle"]};
    }

    h1, h2 {
        font-weight: 800;
    }
 
    h3, h4 {
        font-weight: 700;
    }

    h1 {       
        font-size: 3rem;
        color: ${props => props.theme["base-title"]};
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.25rem;
    }

    h4 {
        font-size: 1.125rem;
    }

`
