import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Form = styled.div`
  width: 32rem;
  @media (max-width: 320px) {
    width: 28rem;
  }
  @media (max-width: 280px) {
    width: 26rem;
  }
`

export const Container = styled.div`
  align-items: center;
  display: flex;
`
export const Spacing1 = styled.div`
  margin: 1rem 0 0 0;
`
export const Spacing2 = styled.div`
  margin: 3rem 0 0 0;
`
export const Spacing3 = styled.div`
  margin: 2.5rem 0 2.5rem 0;
`

export const spacing = styled.div`
  width: 13.5rem;
  @media (max-width: 320px) {
    width: 12rem;
  }
  @media (max-width: 280px) {
    width: 10rem;
  }
`
export const Line = styled.div`
  width: 100%;
  text-decoration: none;
  border-bottom: 0.1rem solid #767676;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 1.2rem;
    font-weight: ${theme.font.regular};
    color: ${theme.colors.lightGray1};
    margin: 0 1.5rem 0 1.5rem;
  `}
`

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    font-size: 1.6rem;
    font-weight: ${theme.font.regular};
    color: ${theme.colors.lightGray1};
  `}
`
export const Developer = styled.div`
  ${({ theme }) => css`
    font-size: 1.4rem;
    font-weight: ${theme.font.regular};
    color: ${theme.colors.lightGray1};
    > a {
      color: ${theme.colors.green};
      margin: 0 0 0 0.5rem;
    }
  `}
`

export const Icons = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 23.3rem;
    height: 4.59rem;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    > svg {
      width: 4.5rem;
      height: 4.5rem;
      color: ${theme.colors.black1};
    }
  `}
`

type ImageProps = {
  src: string
}
export const Google = styled.a<ImageProps>`
  ${({ src }) => css`
    width: 3.5rem;
    height: 3.5rem;
    background-image: url(${src});
    justify-content: center;
    background-position: center center;
    background-size: cover;
  `}
`

export const Facebook = styled.a<ImageProps>`
  ${({ src }) => css`
    width: 3.5rem;
    height: 3.5rem;
    background-image: url(${src});
    justify-content: center;
    background-position: center center;
    background-size: cover;
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.green};
  `}
`
