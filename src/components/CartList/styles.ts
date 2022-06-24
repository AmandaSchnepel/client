import { tint } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.white1};
    display: flex;
    flex-direction: column;
    align-self: start;
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${tint(0.2, theme.colors.white2)};
    color: ${theme.colors.black1};
    font-weight: ${theme.font.bold};
    font-size: ${theme.sizes.small};
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    ${media.greaterThan('medium')`
      font-size: ${theme.sizes.medium};
      padding: ${theme.spacings.small};
    `};
  `}
`

export const Total = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.black1};
  `}
`