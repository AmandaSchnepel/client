import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    > button {
      width: 3.5rem;
      height: 3.5rem;
      background: ${theme.colors.grayConter};
      font-weight: ${theme.font.medium};
      color: #fff;
      font-size: 2rem;
      border-radius: 3rem;
      border: none;
      cursor: pointer;

      ${media.lessThan('medium')`
      width: 2.5rem;
      height: 2.5rem;`}
    }

    > input {
      border: 0;
      text-align: center;
      width: 8.8rem;
      font-size: 1.5rem;
      cursor: pointer;

      ${media.lessThan('medium')`
      width: 6rem;`}
    }

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
