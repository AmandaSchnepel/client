import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
`
type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    width: 18.8rem;
    height: 19.1rem;
    border-radius: 1.2rem;
    background-color: ${theme.colors.white1};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;
  `}
`
