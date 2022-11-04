import styled from "styled-components";
import backgroundImg from '../../assets/background-home.png';

export const HomeContainer = styled.section`
    width: 100%;
    height: 34rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${backgroundImg}) no-repeat center;

    .grid {
        width: 100%;
        max-width: 72rem;
        padding: 0 1rem;

        display: flex;
        justify-content: space-between;
        align-items: center;

        .left_container {
        width: 100%;
        max-width: 36.75rem;
        display: flex;
        flex-direction: column;

        p {
            font-weight: 400;
            font-size: 1.25rem;
            line-height: 130%;
            color: ${props => props.theme["base-subtitle"]};
            margin-top: 1rem;
            margin-bottom: 4.125rem;
        }

        ul {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(1, 14.4375rem 18.375rem);
            gap: 1.25rem 2.5rem;

            li {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 0.75rem;
                span {
                    font-weight: 400;
                    font-size: 1rem;
                    line-height: 130%;
                    color: ${props => props.theme["base-text"]};
                }
            }
        }
    }

    .right_container {
        width: 100%;
        max-width: 29.75rem;
    }
    
    }

    @media(max-width: 900px) {
        height: 650px;
        background: ${props => props.theme.white};
        .grid {
            flex-direction: column;
            height: 100%;
        }
    }

`

const BACKGROUND_COLOR = {
   primary: 'primary-color',
   primaryDark: 'primary-color-dark',
   secondary: 'secondary-color',
   baseGray: 'base-text',
} as const

interface IconColorsProps {
    backgroundColor: keyof typeof BACKGROUND_COLOR;
}

export const IconColors = styled.div<IconColorsProps>`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${props => props.theme[BACKGROUND_COLOR[props.backgroundColor]]};
    color: ${props => props.theme.white};


`