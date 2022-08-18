import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``

type ImageProps = {
  src: string
}
export const Image = styled.img<ImageProps>`
  ${({ src }) => css`
    max-width: 100%;
    margin-top: 7rem;
    background-image: url(${src});
    background-position: center center;
    background-size: cover;

    ${media.lessThan('small')`
    max-width: 30%;
`}
  `}
`
