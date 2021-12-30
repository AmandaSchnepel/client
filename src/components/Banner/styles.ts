import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  position: relative;
`

type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    width: 27rem;
    height: 13.5rem;
    border-radius: 1.3rem;
    background-color: ${theme.colors.lightGray1};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;

    ${media.greaterThan('medium')`
    width: 46.1rem;
    height: 22.2rem;
    border-radius: 1.3rem;
    `}
  `}
`
