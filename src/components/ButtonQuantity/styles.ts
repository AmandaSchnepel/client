import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { ButtonQualityProps } from '.'

export type WrapperProps = Pick<ButtonQualityProps, 'size'>

const wrapperModifires = {
  regular: () => css`
    > button {
      width: 3.5rem;
      height: 3.5rem;

      ${media.lessThan('medium')`
      width: 2.5rem;
      height: 2.5rem;
    `}
    }
    > input {
      width: 8.8rem;

      ${media.lessThan('medium')`
      width: 6rem;
    `}
    }
  `,
  small: () => css`
    > button {
      width: 2rem;
      height: 2rem;
      font-size: 1.5rem;
    }
    > input {
      width: 4rem;
      font-size: 1.3rem;
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, size }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    > button {
      background: ${theme.colors.grayConter};
      font-weight: ${theme.font.medium};
      color: #fff;
      font-size: 2rem;
      border-radius: 3rem;
      border: none;
      cursor: pointer;
    }

    > input {
      border: 0;
      text-align: center;
      font-size: 1.5rem;
      cursor: pointer;

      &:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
      }
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
    ${!!size && wrapperModifires[size]};
  `}
`
