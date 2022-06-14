import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 41rem;
  ${media.lessThan('medium')`
   width: 32rem;
    
  `}
  ${media.lessThan('small')`
   width: 26rem;
  `}
`
export const div = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`

export const Developer = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray1};
    font-size: 2rem;
    font-weight: ${theme.font.regular};
    text-decoration: none;

    ${media.lessThan('medium')`
    font-size: 1.8rem;
    
  `}
  `}
`

export const FavButton = styled.div`
  ${({ theme }) => css`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;

> svg{
cursor: pointer;
width: 2.4rem;
height: 2.4rem;
justify-content: flex-end;
color: ${theme.colors.blackgray};
`}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 2.5rem;
    color: ${theme.colors.black1};
    font-weight: ${theme.font.regular};
    width: 41rem;
    line-height: 4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    margin: 0.5rem 0 0 0;

    ${media.lessThan('medium')`
    width: 32rem;
    font-size: 2rem;
    line-height: 3rem;
  `}
    ${media.lessThan('small')`
    max-width: 26rem;
  `}
  `}
`
export const div2 = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  margin: 2rem 0 0 0;
`

export const Price = styled.h1`
  ${({ theme }) => css`
    font-size: 3rem;
    color: ${theme.colors.black1};
    font-weight: 600;

    ${media.lessThan('medium')`
    font-size: 2.5rem;
    
  `}
  `}
`

export const div3 = styled.div`
  display: flex;
  flex-direction: column;
`

export const Description = styled.h3`
  ${({ theme }) => css`
    font-size: 2rem;
    color: ${theme.colors.black1};
    font-weight: ${theme.font.regular};
    margin: 4rem 0 4rem 0;
    width: 42rem;
    line-height: 2.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 4;

    ${media.lessThan('medium')`
      max-width: 32rem;
      font-size: 1.5rem;
      
    `}

    ${media.lessThan('small')`
    max-width: 26rem;
  `}
  `}
`
