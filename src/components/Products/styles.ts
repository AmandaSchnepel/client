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
export const Container2 = styled.div`
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
    justify-content: center;
    background-position: center center;
    background-size: cover;
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
type ModalProps = {
  isOpen: boolean
}

const modalModifiers = {
  open: () => css`
    opacity: 1;
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
}

export const Modal = styled.div<ModalProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${theme.colors.white1};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${theme.layers.modal};
    transition: opacity ${theme.transition.default};
    ${isOpen && modalModifiers.open()}
    ${!isOpen && modalModifiers.close()}
> svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`
export const sliderDesign = styled.section`
  ${({ theme }) => css`
    .slick-dots {
      position: absolute;
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.xxsmall};
      li {
        background: ${theme.colors.grayLine};
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        cursor: pointer;
        &.slick-active {
          background: ${theme.colors.green};
        }
      }
      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }
    img{
      display: flex;
      width:32rem;
      height: 42rem;
      align-items:center;
      justify-content: center;
      background-position: center center;
      background-size: cover;
    }     
  }
`}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Container1 = styled.div``

export const Description2 = styled.h1`
  ${({ theme }) => css`
    font-size: 2rem;
    color: ${theme.colors.black1};
    font-weight: ${theme.font.regular};
    margin: 4rem 0 4rem 0;
    width: 44rem;
    line-height: 2.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 4;
  `}
`

export const Container3 = styled.div`
  display: flex;
`

export const Developer2 = styled.h1`
  ${({ theme }) => css`
    font-size: 2rem;
    color: ${theme.colors.lightGray1};
    font-weight: ${theme.font.light};
    margin: 0 32rem 0 0;
  `}
`

export const Title2 = styled.h2`
  ${({ theme }) => css`
    font-size: 2.5rem;
    color: ${theme.colors.black1};
    font-weight: ${theme.font.regular};
    width: 44rem;
    line-height: 4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 3;
  `}
`

export const Container4 = styled.div`
  display: flex;
  margin: 2rem 0 2rem 0;
`

export const Price2 = styled.h2`
  ${({ theme }) => css`
    font-size: 3rem;
    color: ${theme.colors.black1};
    font-weight: 600;
    margin: 0 14.5rem 0 0;
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    width: 41.8rem;
    height: 5.5rem;
    background: ${theme.colors.green};
    color: ${theme.colors.white1};
    border-radius: 1rem;
    border: none;
    font-size: 2.5rem;
  `}
`
