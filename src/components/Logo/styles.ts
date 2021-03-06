import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 10rem;
    height: 5rem;
  `,

  large: () => css`
    width: 13rem;
    height: 5.3rem;
  `,
  xlarge: () => css`
    width: 22.1rem;
    height: 5.1rem;
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]}
  `}
`
