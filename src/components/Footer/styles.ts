import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  margin: 30rem 0 0 0;
`
export const Backgoround = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 55.8rem;
    background: ${theme.colors.green};
    align-items: center;
    justify-content: center;
  `}
`
export const Logo = styled.div`
  margin: 10.5rem 20.5rem 0 0;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 8.6rem 0 8.6rem;
`
export const Group1 = styled.div`
  display: flex;
  flex-direction: row;
`

export const Group2 = styled.div`
  display: flex;
  flex-direction: row;
`

export const GroupLojas = styled.div`
  flex-direction: column;
  width: 28.5rem;
  height: 18.9rem;
  margin: 10.5rem 7rem 13rem 7rem;
`

export const GroupContato = styled.div`
  flex-direction: column;
  width: 31.5rem;
  height: 12.7rem;
  margin: 10.5rem 0 13rem 7rem;
`

export const Line = styled.div`
  width: 100%;
  text-decoration: none;
  border-bottom: 0.2rem solid #ffff;
  opacity: 70%;
  margin: 0 0 4rem 0;
`

export const GroupCop = styled.div`
  flex-direction: column;
  margin: 0 5rem 0 49.5rem;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.sizes.xlarge};
    font-weight: ${theme.font.regular};
    color: ${theme.colors.white1};
    margin: 0 0 0.5rem 0;
  `}
`

export const Developer = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.sizes.medium};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white1};
    opacity: 75%;
    margin: 0 0 0.5rem 0;
  `}
`

export const GroupIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    cursor: pointer;
    width: 16.7rem;
    justify-content: space-between;
    margin: 0 0 0 14rem;

    > svg {
      width: 2.5rem;
      height: 2.5rem;
      color: ${theme.colors.white1};
    }
  `}
`
