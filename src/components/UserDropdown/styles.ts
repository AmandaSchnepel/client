import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 26rem;

    a:not(:last-child) {
      border-bottom: 0.1rem solid ${theme.colors.lightGray1};
    }
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    background: ${theme.colors.white1};
    color: ${theme.colors.black1};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transition.default};
    &:hover {
      background: ${theme.colors.green};
      color: ${theme.colors.white1};
    }
    > svg {
      width: 2.4rem;
      height: 2.4rem;
    }
    > span {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`
