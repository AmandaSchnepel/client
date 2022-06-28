import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 35rem;

  ${media.lessThan('medium')`
width: 31rem;
`}
`

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  margin: 0 0 1rem 0;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 1.6rem;
    color: ${theme.colors.black1};
    font-weight: ${theme.font.regular};
    line-height: 2.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 4;

    ${media.lessThan('medium')`
      font-size: 1.4rem;
      line-height: 1.6rem;
      
    `}
  `}
`
export const Valor = styled.h1`
  ${({ theme }) => css`
    font-size: 1.6rem;
    color: ${theme.colors.black1};
    font-weight: ${theme.font.regular};
    line-height: 2.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 4;

    ${media.lessThan('medium')`
      font-size: 1.4rem;
      line-height: 1.6rem;
      
    `}
  `}
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0 0 0;
`
