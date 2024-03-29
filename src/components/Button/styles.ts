import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { ButtonProps } from '.'

export type WrapperProps = Pick<ButtonProps, 'size'>

const wrapperModifires = {
  xxsmall: (theme: DefaultTheme) => css`
    height: 2.7rem;
    width: 14rem;
    border-radius: 0.8rem;
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
    @media (max-width: 320px) {
      width: 28rem;
    }
    @media (max-width: 280px) {
      width: 26rem;
    }
  `,
  xlarge: (theme: DefaultTheme) => css`
    width: 41.2rem;
    height: 5rem;
    font-size: ${theme.sizes.xlarge};

    ${media.lessThan('medium')`
    font-size: ${theme.sizes.large};
    width: 32rem;
  `}
    ${media.lessThan('small')`
    width: 26rem;
  `}
  `,
  ButtonBanner: (theme: DefaultTheme) => css`
    width: 30.2rem;
    height: 5rem;
    font-size: ${theme.sizes.xlarge};

    ${media.lessThan('medium')`
  font-size: ${theme.sizes.medium};
  width: 12rem;
  height: 3.4rem;
`}
  `,
  fullWidth: () => css`
    width: 100%;
    height: 4rem;
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
