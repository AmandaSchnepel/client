import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
`
export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 22.6rem;
    height: 6.7rem;
    border-radius: 1.5rem;
    background: ${theme.colors.black1};
    margin: 0 1.5rem 0 0.5rem;
    cursor: pointer;

    > svg {
      width: 4.5rem;
      height: 4.5rem;
      color: ${theme.colors.white1};
      margin: 0 0.6rem 0 0.5rem;
    }
  `}
`

type ImageProps = {
  src: string
}
export const GoogleIcon = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    width: 4.5rem;
    height: 4.5rem;
    color: ${theme.colors.white1};
    margin: 0 0.6rem 0 0.5rem;
    background-image: url(${src});
    justify-content: center;
    background-position: center center;
    background-size: cover;
  `}
`
export const StyleButton = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  ${({ theme }) => css`
color: ${theme.colors.white1};
font-size: 1.5rem;
font-weight:${theme.font.light};
line-height:2.3rem;


 >strong{
    ${({ theme }) => css`
      color: ${theme.colors.white1};
      font-size: 2.7rem;
      font-weight: ${theme.font.regular};
    `}
`}
`
