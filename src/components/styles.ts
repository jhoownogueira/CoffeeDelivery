import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
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