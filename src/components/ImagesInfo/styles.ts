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
    width: 35rem;
    height: 35rem;
    padding: 0 4rem 0 4rem;
    background-image: url(${src});
    justify-content: center;
    background-position: center center;
    background-size: cover;
  `}
`
export const Title = styled.div`
  ${({ theme }) => css`
    width: 30rem;
    height: 6rem;
    font-size: 2.4rem;
    font-weight: ${theme.font.light};
    text-align: center;
    margin: -2rem 0 0 3.3rem;

    strong {
      font-weight: ${theme.font.medium};
    }
  `}
`

export const Spacings = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem 0 3rem;
`
