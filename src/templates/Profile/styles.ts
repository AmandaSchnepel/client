import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``

export const Main = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 32rem 1fr;
      gap: calc(${theme.grid.gutter} * 2);
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white1};
    box-shadow: inset 0 0 0, 0 0 0.08em gray;
    color: ${theme.colors.black1};
    padding: ${theme.spacings.xsmall};
  `}
`
