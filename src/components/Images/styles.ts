import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  position: relative;
`
type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    width: 100%;
    height: 30rem;
    border-radius: 1.2rem;
    background-color: ${theme.colors.lightGray1};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;
  `}
`
