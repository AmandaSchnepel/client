import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const Container = styled.div`
  display: flex;
  width: 35rem;

  ${media.lessThan('medium')`
width: 31rem;
    `}
`
export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`
export const Title = styled.h1`
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
type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    background: ${theme.colors.white1};
    z-index: 1;
    position: absolute;
    flex-direction: column;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    display: flex;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

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
