import styled from "styled-components";

export const HomeContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0 0;

  .section_home {
    width: 100%;
    height: 21.5rem;
    max-width: 72rem;
    padding: 0 1rem;
    margin: 5.75rem 0;

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
        color: ${(props) => props.theme["base-subtitle"]};
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
            color: ${(props) => props.theme["base-text"]};
          }
        }
      }
    }

    .right_container {
      width: 100%;
      max-width: 29.75rem;
    }
  }

  @media (max-width: 900px) {
    height: 650px;
    background: ${(props) => props.theme.white};
    .grid {
      flex-direction: column;
      height: 100%;
    }
  }

  .section_coffees {
    width: 100%;
    max-width: 72rem;
    padding: 2rem 1rem 10rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h2 {
        width: 100%;
        text-align: left;
        margin-bottom: 2rem;
    }
    .coffees_grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2.5rem 2rem;
    }
  }
`;

const BACKGROUND_COLOR = {
  primary: "primary-color",
  primaryDark: "primary-color-dark",
  secondary: "secondary-color",
  baseGray: "base-text",
} as const;

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

  background: ${(props) =>
    props.theme[BACKGROUND_COLOR[props.backgroundColor]]};
  color: ${(props) => props.theme.white};
`;

export const CoffeeCard = styled.div`
  width: 16rem;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem 1.25rem;
  border-radius: 12px;
  background: ${(props) => props.theme["base-card"]};
  .imgCoffee {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }

  .tags {
    display: flex;
    gap: 0.25rem;
    align-items: center;
    margin: 0.75rem 0 1rem;
    span {
      width: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0.25rem 0.5rem;
      border-radius: 999px;
      background: ${(props) => props.theme["primary-color-light"]};

      text-align: center;
      font-weight: 700;
      font-size: 0.625rem;
      color: ${(props) => props.theme["primary-color-dark"]};
    }
  }

  p {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme["base-label"]};
    margin: 0.5rem 0 2rem;
  }

  .coffe_card_bottom {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .price {
      display: flex;
      align-items: flex-end;
      gap: 0.2rem;
      span,
      strong {
        color: ${(props) => props.theme["base-text"]};
      }
      span {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;
      }

      strong {
        font-family: "Baloo 2", sans-serif;
        font-weight: 800;
        font-size: 1.5rem;
        line-height: 85%;
      }
    }
    .cart {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        justify-content: space-between;
      .units {
        width: 4.5rem;
        height: 2.375rem;
        padding: 0 0.5rem;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: ${(props) => props.theme["base-button"]};
        
        button {
          border: 0;
          background: transparent;
          font-family: "Baloo 2", sans-serif;
          color: ${(props) => props.theme["secondary-color"]};
          font-weight: 800;
          font-size: 1.5rem;
        }

      }
      .add_to_cart {
        width: 2.375rem;
        height: 2.375rem;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: transparent;
        background: ${(props) => props.theme["secondary-color-dark"]};
        color: ${props => props.theme.white};
      }
    }
  }
`;
