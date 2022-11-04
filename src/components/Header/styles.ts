import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

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

export const Cart = styled.div`
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

`