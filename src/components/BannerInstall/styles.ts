import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
`

export const Background = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 34.2rem;
    margin: 15rem 0 10rem 0;
    background: ${theme.colors.green};
  `}
`

type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    display: flex;
    width: 37.1rem;
    height: 52.4rem;
    background-image: url(${src});
    justify-content: center;
    background-position: center center;
    background-size: cover;
    margin: 0 0 0 -3rem;
  `}
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 18rem;
`

export const Title = styled.div`
  ${({ theme }) => css`
    font-size: 5.5rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white1};
    line-height: 4.8rem;
    padding: 0 0 2rem 0;

    > strong {
      font-size: 2.5rem;
      font-weight: ${theme.font.regular};
    }
  `}
`
