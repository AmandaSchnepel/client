import styled, { css, DefaultTheme } from 'styled-components'

export const Nav = styled.nav`
  ${({ theme }) => css`
    flex-direction: column;
    border: 0;
    a:not(:last-child) {
      border-bottom: 0.1rem solid ${theme.colors.grayLine};
    }
  `}
`
const linkModifiers = {
  default: (theme: DefaultTheme) => css`
    background: ${theme.colors.white1};
    color: ${theme.colors.black1};
  `,

  active: (theme: DefaultTheme) => css`
    background: ${theme.colors.green};
    color: ${theme.colors.white1};
  `
}

type LinkProps = {
  isActive?: boolean
}

export const Link = styled.a<LinkProps>`
  ${({ theme, isActive }) => css`
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transition.default};
    &:hover {
      background: ${theme.colors.green};
      color: ${theme.colors.white1};
    }
    > span {
      margin-left: ${theme.spacings.xsmall};
    }
    ${!isActive && linkModifiers.default(theme)};
    ${isActive && linkModifiers.active(theme)};
  `}
`
