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
    width: 37.1rem;
    height: 41.6rem;
    padding: 0 4rem 0 4rem;
    background-image: url(${src});
    justify-content: center;
    background-position: center center;
    background-size: cover;
  `}
`
export const Title = styled.div`
  ${({ theme }) => css`
    width: 32rem;
    height: 6rem;
    font-size: 2.8rem;
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
  margin: 0 2rem 0 2rem;
`
