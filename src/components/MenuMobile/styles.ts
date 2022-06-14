import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
position: fixed;
right: 13%;
top: 50%;
margin-top: 26rem;
flex-grow: 1;
display: flex;
justify-content: center;

@media(max-width: 1024px){
right: 15%;
top: 50%;
    }
   }
`

export const Background = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    justify-content: space-between;
    padding: 0 3rem 0 3rem;
    align-items: center;
    box-shadow: inset 0 0 0, 0 0 3em gray;
    height: 5.5rem;
    width: 27rem;
    background: ${theme.colors.white1};
    border-radius: 2rem;
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray1};
    cursor: pointer;
    width: 2.8rem;
    height: 2.8rem;
  `}
`
