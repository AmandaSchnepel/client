import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`

type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    display: flex;
    width: 48rem;
    height: 40rem;
    align-items: center;
    background-image: url(${src});
    justify-content: center;
    background-position: center center;
    background-size: cover;
    margin: 0 10rem 0 -5rem;
  `}
`

export const Container = styled.div`
  flex-direction: column;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.black1};
    font-size: 5rem;
    font-weight: ${theme.font.light};

    > strong {
      font-weight: ${theme.font.bold};
    }
  `}
`

export const Developer = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.black1};
    font-size: 3rem;
    font-weight: ${theme.font.regular};
    margin: 2rem 0 0 0;
    text-align: center;
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    width: 41.2rem;
    height: 7rem;
    font-size: 3rem;
    border: solid 0.3rem;
    border-radius: 0.8rem;
    border-color: ${theme.colors.green};
    font-weight: ${theme.font.regular};
    background: ${theme.colors.white1};
    color: ${theme.colors.green};
    margin: 3rem 0 0 4rem;
  `}
`
