import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  maxwidth: 41rem;
`
export const div = styled.div`
  display: flex;
`

export const Developer = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray1};
    font-size: 2rem;
    font-weight: ${theme.font.regular};
    text-decoration: none;
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
  `}
`

export const div2 = styled.div`
  display: flex;
  margin: 2rem 0 0 0;
`

export const Price = styled.h1`
  ${({ theme }) => css`
    font-size: 3rem;
    color: ${theme.colors.black1};
    font-weight: 600;
    margin: 0 14.5rem 0 0;
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
  `}
`
