import styled from "styled-components";

export const CheckoutContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0 0;

  .grid {
    width: 100%;
    max-width: 72rem;
    padding: 0 1rem;
    display: flex;

    .left_container {
      width: 100%;
      max-width: 40rem;

      .container {
        width: 100%;
        padding: 2.5rem;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .container_top {
          width: 100%;
          display: flex;
          align-items: flex-start;

          svg {
            color: ${(props) => props.theme["primary-color-dark"]};
          }

          .top_info {
            line-height: 130%;

            span {
              color: ${(props) => props.theme["base-text"]};
            }

            p {
              font-size: 0.875rem;
              color: ${(props) => props.theme["base-subtitle"]};
            }
          }

          &.secondary_color {
            svg {
              color: ${(props) => props.theme["secondary-color"]};
            }
          }
        }

        .container_inputs {
          width: 100%;
          display: flex;
          gap: 1rem;
          flex-direction: column;
          align-items: flex-start;

          margin-top: 2rem;
          margin-bottom: 3.25rem;

          .field {
            position: relative;
            width: 100%;

            #cep {
              width: 50%;
            }

            input {
              width: 100%;
              height: 2.625rem;
              border-radius: 4px;
              padding: 0.75rem;
              border: 1px solid ${(props) => props.theme["base-button"]};
              background: ${(props) => props.theme["base-input"]};
            }

            label {
              position: absolute;
              top: 0.875rem;
              right: 1rem;

              font-style: italic;
              font-size: 0.75rem;
              line-height: 130%;
              color: ${(props) => props.theme["base-label"]};
            }
          }

          .field_group {
            width: 100%;
            display: flex;
            gap: 0.75rem;

            #complemento {
              padding-right: 4.2rem;
            }
          }
        }

        .container_payment {
          input[type="radio"] {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.75rem;
            padding: 1rem;
            border: 1px solid transparent;
            border-radius: 6px;
            color: ${(props) => props.theme["base-text"]};
            background: ${(props) => props.theme["base-button"]};

            svg {
              color: ${(props) => props.theme["secondary-color"]};
            }

            &:hover {
              background: ${(props) => props.theme["base-hover"]};
            }
          }
        }
      }
    }

    .right_container {
      width: 100%;
      max-width: 28rem;
    }
  }
`;
