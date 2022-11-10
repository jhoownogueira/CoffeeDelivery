import styled from "styled-components";

export const EmptyCartContainer = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 gap: 2rem;
 flex-direction: column;
 align-items: center;
 justify-content: center;

 a {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 0.9rem;
    border-bottom: 1px solid transparent;
    color: ${props => props.theme["secondary-color-dark"]};
    transition: all 0.2s;

    &:hover {
        border-bottom: 1px solid ${props => props.theme["secondary-color"]};
        color: ${props => props.theme["secondary-color"]};
    }
 }
`