import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    border-bottom: 0.1rem solid ${theme.colors.grayLine};

    ${media.lessThan('medium')`
padding: ${theme.spacings.xsmall} 0.5rem;
    `}
  `}
`
export const Container = styled.div`
  display: flex;
`

export const Image = styled.div`
  ${({ theme }) => css`
    flex-shrink: 0;
    margin-right: 1.5rem;
    width: 5rem;
    height: 5.5rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    ${media.greaterThan('medium')`
      margin-right: ${theme.spacings.xsmall};
      width: 8.1rem;
      height: 7.5rem;
    `};
  `}
`

export const Group1 = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: 1.6rem;
    color: ${theme.colors.black1};
    font-weight: ${theme.font.regular};
    width: 30.5rem;
    line-height: 2.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 4;

    ${media.lessThan('medium')`
      width: 13.9rem;
      font-size: 1.2rem;
      line-height: 1.6rem;
      
    `}

    ${media.lessThan('small')`
    max-width: 26rem;
  `}
  `}
`

export const Price = styled.h3`
  ${({ theme }) => css`
    font-size: 2rem;
    color: ${theme.colors.black1};
    font-weight: ${theme.font.medium};

    ${media.lessThan('medium')`
font-size: 1.4rem;
    `}
  `}
`
export const Group2 = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`
