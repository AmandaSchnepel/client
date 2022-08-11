import { tint } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.white1};
    display: flex;
    flex-direction: column;
  `}
`
export const ProductList = styled.div`
  max-height: 40rem;
  overflow-y: auto;
`

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    background: ${tint(0.2, theme.colors.white2)};

    ${media.lessThan('medium')`
    background: none;
    font-size: ${theme.sizes.medium};

    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.black1};
    font-weight: ${theme.font.bold};
    font-size: ${theme.sizes.small};
    padding: 2rem;

    ${media.greaterThan('medium')`
  font-size: ${theme.sizes.medium};
  padding: ${theme.spacings.small};
`};
  `}
`

export const Total = styled.span`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    color: ${theme.colors.black1};
    font-weight: ${theme.font.bold};
    font-size: ${theme.sizes.small};
    padding: 2rem;

    ${media.greaterThan('medium')`
  font-size: ${theme.sizes.medium};
  padding: ${theme.spacings.small};
`};
  `}
`
