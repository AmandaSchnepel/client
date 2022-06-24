import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    width: 35rem;
    padding: ${theme.spacings.small};
    border-bottom: 0.1rem solid ${theme.colors.grayLine};

    ${media.lessThan('medium')`
padding: ${theme.spacings.xsmall} 0.5rem;
width: 31rem;
    `}
  `}
`
export const Image = styled.div`
  flex-shrink: 0;
  margin-right: 1.5rem;
  width: 5rem;
  height: 2.7rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Titulo = styled.h2`
  ${({ theme }) => css`
    font-size: 1.6rem;
    color: ${theme.colors.black1};
    font-weight: ${theme.font.regular};

    ${media.lessThan('medium')`
      width:18rem;
      font-size: 1.4rem;
      line-height: 1.6rem;
      
    `}
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
display: flex;
flex-grow: 1;
justify-content: flex-end;
> svg{
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    color: ${theme.colors.green};

    ${media.lessThan('medium')`
    width: 1.8rem;
    height: 1.8rem;
    
  `}
`}
`
