import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { ProductsProps } from '.'

const wrapperModifiers = {
  small: () => css`
    width: 12rem;
    height: 12.4rem;
  `,

  medium: () => css`
    width: 12.2rem;
    height: 17.3rem;
  `,
   large: () => css`
   width: 20rem;
   height: 25rem;
 `
}
export const Wrapper = styled.div<ProductsProps>`
${({ theme, size }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white1};

    ${!!size && wrapperModifiers[size]}
  `}
`


export const Content = styled.div`
display: flex;
flex-direction: column;
margin: 0 0 -0.4rem 0;
`

export const FavButton = styled.div`
${({ theme })=> css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;

    >svg{ 
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    color: ${theme.colors.blackgray};
   }
`}
`

export const ImageBox = styled.div`
${({ theme })=> css`
    height: 10rem; 
    position: relative;
    background-color: ${theme.colors.lightGray1};
    background-position:center center ;
    background-size: cover;
    `}

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    ${media.greaterThan('medium')`
    height: 15rem; 
    `}
    ${media.lessThan('medium')`
    height: 10rem; 
    `}
`

export const Developer = styled.h6`
${({ theme }) => css`
    color: ${theme.colors.lightGray1};
    font-size: ${theme.sizes.xsmall};
    font-weight: ${theme.font.regular};
    text-decoration: none;
  `}
  ${media.greaterThan('medium')`
  font-size: 1.4rem;
`}
  ${media.lessThan('medium')`
  font-size: 1.2rem;
`}
`

export const Info = styled.a`
  max-width: calc(100% - 0.2rem);
  text-decoration: none;
`

export const Title = styled.h1`
${({ theme }) => css`
    color: ${theme.colors.black1};
    font-size: ${theme.sizes.xsmall};
    font-weight: ${theme.font.regular};
    margin: -0.4rem 0 0 0 ;
    text-decoration: none;
    cursor: pointer;
    line-height: 1.5rem;
  `}
  ${media.greaterThan('medium')`
  font-size: 1.6rem;
`}
  ${media.lessThan('medium')`
  font-size: 1.2rem;
`}
`
export const BuyBox = styled.div`
display: flex;
flex-direction: column;
`

type PriceProps ={
    isPromotional?:boolean
}
const priceModifiers = {
    default: (theme: DefaultTheme) => css`
    color: ${theme.colors.black1};
    text-decoration: none;
    font-weight: ${theme.font.bold};
    `,
    promotional: (theme:DefaultTheme) => css`
    color: ${theme.colors.lightGray1};
    text-decoration: line-through;
    font-size: ${theme.sizes.small};
    font-weight: ${theme.font.regular};
    `
}

export const Price = styled.div<PriceProps>`
${({ theme, isPromotional }) => css`
    display: inline-flex;
    font-size: ${theme.sizes.medium};

    ${!isPromotional && priceModifiers.default( theme )}
    ${isPromotional && priceModifiers.promotional(theme)}
  `}
`
