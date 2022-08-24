import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Container } from 'components/Container'

export const Wrapper = styled.div``

export const Main = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 17rem 1fr;
    gap: ${theme.grid.gutter};
    `}
  `}
`
export const Center = styled.div`
  display: flex;
  justify-content: center;
`
export const Container2 = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const ShowMore = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.green};
    text-align: center;
    padding: ${theme.spacings.medium};
    text-transform: uppercase;
    font-weight: medium;
    cursor: pointer;
    > svg {
      color: ${theme.colors.green};
    }
  `}
`
