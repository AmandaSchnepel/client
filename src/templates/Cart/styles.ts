import styled, { css } from 'styled-components'

export const Wrapper = styled.main``
export const Title = styled.div`
  margin: 2rem 0 0 0;
`

export const Container = styled.div`
  display: flex;
  margin: 2rem 0 0 0;
`
export const Container1 = styled.div`
  margin: 2rem 0 2rem 0;
`
export const Container2 = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white1};
    box-shadow: inset 0 0 0, 0 0 0.08em gray;
    height: 32.2rem;
    width: 70rem;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: 0 0 0 5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.white1};
    box-shadow: inset 0 0 0, 0 0 0.08em gray;
    width: 42rem;
    height: 65rem;
  `}
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
`

export const Title2 = styled.h1`
  display: flex;
  margin: 2rem 0 0 0;
  justify-content: center;
  align-items: center;
`
export const Linha = styled.div`
  width: 100%;
  text-decoration: none;
  margin: 1rem 0 0 0;
  border-bottom: 0.2rem solid #d6d6d6;
  opacity: 100%;
`

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Container3 = styled.div``
