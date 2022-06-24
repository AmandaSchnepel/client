import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    border-bottom: 0.1rem solid ${theme.colors.grayLine};

    ${media.lessThan('medium')`
padding: ${theme.spacings.xsmall} 0.5rem;
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 1.6rem;
    color: ${theme.colors.black1};
    font-weight: ${theme.font.regular};
    width: 23rem;
    line-height: 2.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 4;

    ${media.lessThan('medium')`
      width:18rem;
      font-size: 1.4rem;
      line-height: 1.6rem;
      
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: 1.4rem;
    color: ${theme.colors.grayBox};
    font-weight: ${theme.font.regular};

    ${media.lessThan('medium')`
width:18rem;
font-size: 1.2rem;
line-height: 1.6rem;

`}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    > svg{
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    color: ${theme.colors.green};
    ${media.lessThan('medium')`
    width: 1.5rem;
    height: 1.5rem;
    
  `}
  `}
`

export const Tempo = styled.h3`
  ${({ theme }) => css`
    font-size: 1.4rem;
    margin: 0 0 0 0.5rem;
    color: ${theme.colors.grayBox};
    font-weight: ${theme.font.regular};
    ${media.lessThan('medium')`
width:18rem;
font-size: 1.2rem;
line-height: 1.6rem;
`}
  `}
`
