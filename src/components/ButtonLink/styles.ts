import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

type WrapperProps = {
  hasIcon: boolean
}

const wrapperModifiers = {
  withIcon: (theme: DefaultTheme) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    svg {
      ${media.greaterThan('medium')`
        width: 1.2rem;
    `}
      ${media.lessThan('medium')`
        width: 1rem;
    `}
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, hasIcon }) => css`
    cursor: pointer;
    text-decoration: underline;
    font-weight: ${theme.font.regular};
    color: ${theme.colors.green};

    ${media.greaterThan('medium')`
    font-size: 1.5rem;
`}
    ${media.lessThan('medium')`
    font-size: 1.2rem;
`}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
  `}
`
