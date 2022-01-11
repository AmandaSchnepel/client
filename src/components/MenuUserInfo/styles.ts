import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    position: relative;
    align-items: center;
    flex-direction: column;
    display: flex;

    ${media.greaterThan('medium')`
align-items:flex-start;
margin:${theme.spacings.large} 0 0 10rem;
    `}
  `}
`

type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    width: 8.5rem;
    height: 8.5rem;
    border-radius: 5rem;
    margin: ${theme.spacings.large} 0 0 0;
    background-color: ${theme.colors.lightGray1};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;
  `}
`

export const InfoUser = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
`

export const title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.sizes.medium};
    font-weight: ${theme.font.medium};
    color: ${theme.colors.black1};
  `}
`

export const LinkLogout = styled.h6`
  ${({ theme }) => css`
    font-size: ${theme.sizes.small};
    text-decoration: none;
    color: ${theme.colors.green};
  `}
`
