import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'size'>

const wrapperModifires = {
  xxsmall: (theme: DefaultTheme) => css`
    height: 2.7rem;
    width: 14rem;
    font-size: ${theme.sizes.small};
  `,
  xsmall: (theme: DefaultTheme) => css`
    height: 3.6rem;
    width: 16rem;
    font-size: ${theme.sizes.medium};
  `,
  small: (theme: DefaultTheme) => css`
    height: 4rem;
    width: 25rem;
    font-size: ${theme.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    width: 28rem;
    font-size: ${theme.sizes.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 4rem;
    width: 32rem;
    font-size: ${theme.sizes.medium};
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size }) => css`
    background: ${theme.colors.green};
    color: ${theme.colors.white1};
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};

    ${!!size && wrapperModifires[size](theme)};
  `}
`
