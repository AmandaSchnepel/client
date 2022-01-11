import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { ProductsProps } from '.'

const wrapperModifires = {
  regular: () => css`
    ${media.lessThan('medium')`
   height: 18.3rem;
    width: 12.2rem;

  ${FavButton} {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;

    > svg{
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    } 
  }
  ${ImageBox}{
    height: 8rem;
  }
  ${Title}{
    height: 3rem;
    line-height: 1.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
  }
`}

    ${media.greaterThan('medium')`
    height: 25.5rem;
    width: 20.7rem;

  ${FavButton} {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;

    > svg{
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
    }
  }
  ${Title}{
    height: 3.4rem;
    line-height: 1.7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
  }
`}
  `,

  medium: () => css`
    height: 22.6rem; 
    width: 15.1rem;
    ${Title} {
    font-size: 1.3rem;
    line-height: 1.4rem;
    }
    ${Price}{
    font-size: 1.6rem;
    }
  }
  ${ImageBox}{
    height: 12rem;
  }
  ${Title}{
    height: 3.4rem;
    line-height: 1.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
  }
`
}

export const Wrapper = styled.div<Pick<ProductsProps, 'size'>>`
  ${({ theme, size }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white1};
    ${!!size && wrapperModifires[size]}
  `}
`

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
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

export const ImageBox = styled.div`
  height: 15rem;
  width: 100%;
  justify-content: center;
  align-items: flex-start;

  img {
    align-items: flex-start;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Info = styled.div`
  max-width: calc(100% - 0.2rem);
  text-decoration: none;
`

export const Developer = styled.h2`
  ${({ theme }) => css`
    padding: 0.5rem 0 0 0;
    color: ${theme.colors.lightGray1};
    font-size: ${theme.sizes.small};
    font-weight: ${theme.font.regular};
    text-decoration: none;
  `}
`
export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.black1};
    font-size: ${theme.sizes.xsmall};
    font-weight: ${theme.font.regular};
    text-decoration: none;
    ${media.greaterThan('medium')`
    font-size: ${theme.sizes.small};
    line-height: 1.5rem;
    `}
  `}
`

export const BuyBox = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const Price = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black1};
    font-size: ${theme.sizes.medium};
    font-weight: ${theme.font.bold};
    text-decoration: none;
    ${media.greaterThan('medium')`
    font-size: ${theme.sizes.large};
    `}
  `}
`