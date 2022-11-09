import styled from "styled-components";

export const CheckoutContainer = styled.form`
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
          gap: 0.5rem;
          align-items: flex-start;

          svg {
            color: ${(props) => props.theme["primary-color-dark"]};
          }

          .top_info {
            line-height: 130%;

            span {
              color: ${(props) => props.theme["base-subtitle"]};
            }

            p {
              font-size: 0.875rem;
              color: ${(props) => props.theme["base-text"]};
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
          width: 100%;
          display: flex;
          gap: 0.75rem;
          align-items: center;
          justify-content: space-between;
          margin-top: 2rem;

          input[type="radio"] {
            opacity: 0;
            position: fixed;
            width: 0;
          }
          label {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 0.75rem;
            width: 100%;
            padding: 1rem;
            height: 3.18rem;
            border-radius: 6px;
            border: 1px solid transparent;
            background: ${(props) => props.theme["base-button"]};
            transition: all 0.2s;

            .content {
              display: flex;
              align-items: center;
              justify-content: center;

              font-size: 0.75rem;
              color: ${(props) => props.theme["base-text"]};
              svg {
                color: ${(props) => props.theme["secondary-color"]};
                margin-right: 0.75rem;
              }
            }
          }

          input[type='radio'] + label:hover {
            background: ${props => props.theme["base-hover"]};

          }

          input[type='radio']:checked + label {
            background: ${props => props.theme["secondary-color-light"]};
            border: 1px solid ${props => props.theme["secondary-color"]};
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
