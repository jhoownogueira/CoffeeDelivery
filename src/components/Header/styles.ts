import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
    position: fixed;
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.white};

    .grid {
        width: 100%;
        max-width: 72rem;
        padding: 0 1rem;

        display: flex;
        justify-content: space-between;
        align-items: center;

        nav {
        display: flex;
        gap: 0.75rem;
        align-items: center;
    }
    }
`

export const Locale = styled.div`
    width: fit-content;
    height: 2.375rem;

    display: flex;
    gap: 6px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    padding: 8px;

    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${props => props.theme["secondary-color-dark"]};

    background: ${props => props.theme["secondary-color-light"]};

    svg {
        color: ${props => props.theme["secondary-color"]};
    }
`

interface CartProps {
    empty: boolean
}

export const Cart = styled.div<CartProps>`
    width: 2.375rem;
    height: 2.375rem;

    position: relative;
    display: flex;
    gap: 6px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    padding: 8px;

    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${props => props.theme["primary-color-dark"]};
    background: ${props => props.theme["primary-color-light"]};

    cursor: ${props => props.empty ? "not-allowed" : "pointer"};
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -8px;
        right: -8px;

        font-weight: 700;
        font-size: 12px;
        line-height: 100%;  
        text-align: center;
        letter-spacing: -0.06em;

        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        background: ${props => props.theme["primary-color-dark"]};
        color: ${props => props.theme.white};
    }

    &:before {
        opacity: 0;
        content: 'Seu carrinho está vazio!';
        position: absolute;
        bottom: -2.5rem;
        left: 0;
        width: 210%;
        background: ${props => props.theme.white};
        transition: all 0.3s;
        pointer-events: none;
    }

    ${props => props.empty ? `&:hover { 
        &:before {
            opacity: 1;
        }
     }` : ""}

`