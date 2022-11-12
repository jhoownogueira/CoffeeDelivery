import styled from "styled-components";

export const SuccessContainer = styled.section`
    width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8rem 0 0;

  .grid {
    width: 100%;
    max-width: 72rem;
    padding: 0 1rem;
    display: flex;
    gap: 1rem;
    align-items: flex-end;
    justify-content: space-between;
    .left {
        width: 100%;
        h2 {
            line-height: 130%;
            color: ${prop => prop.theme["primary-color"]};   
        }

        p {
            font-size: 1.25rem;
            line-height: 130%;
            color: ${prop => prop.theme["base-subtitle"]};
        }
        .dados_entrega {
            position: relative;
            width: 100%;
            max-width: 32.875rem;

            display: flex;
            gap: 2rem;
            flex-direction: column;

            padding: 2.5rem;
            background: linear-gradient(white, white) padding-box,
            linear-gradient(to right, #DBAC2C, #8047F8) border-box;
            border-radius: 6px 36px 6px 36px;
            border: 1px solid transparent;
            margin-top: 2.5rem;

            .line {
                display: flex;
                gap: 0.75rem;
                align-items: center;
                
                .info {
                    p, strong {
                        font-size: 1rem;
                    line-height: 130%;
                    color: ${prop => prop.theme["base-text"]};
                    }
                }
            }
        }
    }
    .right {
        width: 100%;
        max-width: 30.75rem;
    }
  }
`

const COLORS_PROPS = {
    secondary: "secondary-color",
    primary: 'primary-color',
    primaryDark: 'primary-color-dark',
} as const

interface ColorsProps {
    colors: keyof typeof COLORS_PROPS;
  }

export const Icon = styled.div<ColorsProps>`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${props => props.theme[COLORS_PROPS[props.colors]]};
    color: ${props => props.theme.white};
`