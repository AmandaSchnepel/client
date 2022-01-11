import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
`
type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    width: 6.3rem;
    height: 6.3rem;
    border-radius: 1.2rem;
    background-color: ${theme.colors.lightGray1};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;

    ${media.greaterThan('medium')`
    width: 8rem;
    height: 8rem;
    border-radius: 1.2rem;
    `}
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.sizes.xsmall};
    font-weight: ${theme.font.regular};
    color: ${theme.colors.black1};
    padding: 0.1rem 0 0 0;

    ${media.greaterThan('medium')`
 font-size: ${theme.sizes.small};
    `}
  `}
`
