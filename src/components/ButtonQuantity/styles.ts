import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    > button {
      width: 3.5rem;
      height: 3.5rem;
      background: ${theme.colors.grayConter};
      color: #fff;
      font-size: 2.8rem;
      border-radius: 3rem;
      border: none;
    }

    > input {
      border: 0;
      text-align: center;
      width: 8.8rem;
      font-size: 1.5rem;
      cursor: pointer;

      &:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
      }
    }

    > input[type='number']::-webkit-outer-spin-button,
    input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    > input[type='number'] {
      -moz-appearance: textfield;
    }
  `}
`
